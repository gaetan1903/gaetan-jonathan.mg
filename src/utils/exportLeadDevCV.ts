import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
    experiences as experiencesFR,
    education as educationFR,
    certifications as certificationsFR,
    skills as skillsFR,
    communityActivities as communityActivitiesFR,
    communityEvents as communityEventsFR,
} from "../data/profile";
import {
    experiences as experiencesEN,
    education as educationEN,
    certifications as certificationsEN,
    skills as skillsEN,
    communityActivities as communityActivitiesEN,
    communityEvents as communityEventsEN,
} from "../data/profile.en";
import cvConfigFR from "../data/cv-lead-dev.json";
import cvConfigEN from "../data/cv-lead-dev.en.json";

type Language = "fr" | "en";

// Nord palette
const N: Record<string, string> = {
    bg: "#2E3440",
    bg2: "#3B4252",
    bg3: "#434C5E",
    fg: "#ECEFF4",
    fg2: "#D8DEE9",
    frost1: "#8FBCBB",
    frost2: "#88C0D0",
    frost3: "#81A1C1",
    frost4: "#5E81AC",
    green: "#A3BE8C",
    yellow: "#EBCB8B",
    orange: "#D08770",
    red: "#BF616A",
    purple: "#B48EAD",
    white: "#FFFFFF",
    muted: "#4C566A",
};

function rgb(hex: string): [number, number, number] {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
}

function resolveColor(c: string): string {
    return N[c] || c;
}

// Load image and crop to circle via canvas
function loadCircularImage(url: string, size = 400): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject("no canvas ctx");
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            const scale = Math.max(size / img.width, size / img.height);
            const w = img.width * scale;
            const h = img.height * scale;
            ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
            resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = reject;
        img.src = url;
    });
}

// Load font file as ArrayBuffer
async function loadFontFile(url: string): Promise<ArrayBuffer | null> {
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        return await res.arrayBuffer();
    } catch {
        return null;
    }
}

export async function exportLeadDevCV(lang: Language = "fr") {
    const cfg = lang === "en" ? cvConfigEN : cvConfigFR;
    const experiences = lang === "en" ? experiencesEN : experiencesFR;
    const education = lang === "en" ? educationEN : educationFR;
    const certifications = lang === "en" ? certificationsEN : certificationsFR;
    const skills = lang === "en" ? skillsEN : skillsFR;
    const communityActivities = lang === "en" ? communityActivitiesEN : communityActivitiesFR;
    const communityEvents = lang === "en" ? communityEventsEN : communityEventsFR;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const W = 210;
    const H = 297;
    const M = 18;
    const CW = W - M * 2;
    let y = 0;

    // ─── Load assets ─────────────────────────────────────

    // Load Product Sans font (only Regular weight available)
    let mainFont = "helvetica";
    try {
        const fontData = await loadFontFile("/fonts/ProductSans-Regular.ttf");
        if (fontData) {
            const fontBase64 = btoa(
                new Uint8Array(fontData).reduce((data, byte) => data + String.fromCharCode(byte), "")
            );
            doc.addFileToVFS("ProductSans-Regular.ttf", fontBase64);
            doc.addFont("ProductSans-Regular.ttf", "ProductSans", "normal");
            mainFont = "ProductSans";
        }
    } catch {
        console.warn("Could not load Product Sans, falling back to Helvetica");
    }

    // Load profile photo as circular PNG
    let profileImg: string | null = null;
    try {
        profileImg = await loadCircularImage("/images/gaetan-profile.jpg", 500);
    } catch {
        console.warn("Could not load profile photo for CV");
    }

    // ─── Helpers ───────────────────────────────────────────

    function newPage(need: number) {
        if (y + need > H - 22) {
            doc.addPage();
            y = 18;
        }
    }

    function setC(hex: string) { doc.setTextColor(...rgb(hex)); }

    // Font helper: Product Sans for normal, helvetica for bold/italic (only Regular weight available)
    function setFont(style: "normal" | "bold" | "italic" = "normal") {
        if (style === "bold") {
            doc.setFont("helvetica", "bold");
        } else if (style === "italic") {
            doc.setFont("helvetica", "italic");
        } else {
            doc.setFont(mainFont, "normal");
        }
    }

    function sectionBar(title: string, color: string) {
        newPage(18);
        y += 4;
        doc.setFillColor(...rgb(color));
        doc.roundedRect(M, y, CW, 9, 1.5, 1.5, "F");
        setFont("bold");
        doc.setFontSize(11);
        setC(N.white);
        doc.text(title, M + 5, y + 6.5);
        y += 14;
    }

    function line() {
        newPage(5);
        doc.setDrawColor(...rgb(N.fg2));
        doc.setLineWidth(0.2);
        doc.line(M, y, W - M, y);
        y += 3;
    }

    function badge(x: number, yy: number, label: string, bgHex: string, fgHex: string): number {
        doc.setFontSize(7.5);
        setFont("normal");
        const tw = doc.getTextWidth(label);
        const pw = tw + 7;
        doc.setFillColor(...rgb(bgHex));
        doc.roundedRect(x, yy, pw, 5.5, 1.5, 1.5, "F");
        setC(fgHex);
        doc.text(label, x + 3.5, yy + 4);
        return pw + 2.5;
    }

    function badgesRow(items: { label: string; bg: string; fg: string }[], sx: number, sy: number): number {
        let bx = sx;
        let by = sy;
        items.forEach(b => {
            doc.setFontSize(7.5);
            const need = doc.getTextWidth(b.label) + 9.5;
            if (bx + need > W - M) { bx = sx; by += 7; }
            bx += badge(bx, by, b.label, b.bg, b.fg);
        });
        return by + 8;
    }

    function bullet(text: string, indent = 4) {
        newPage(6);
        setFont("normal");
        doc.setFontSize(8.5);
        setC(N.bg3);
        const wrap = doc.splitTextToSize(text, CW - indent - 6);
        doc.text("-", M + indent, y);
        doc.text(wrap, M + indent + 4, y);
        y += wrap.length * 3.8 + 1;
    }

    function pageFooter() {
        setFont("normal");
        doc.setFontSize(7);
        setC(N.muted);
        doc.text(
            `CV - ${cfg.header.name}  |  ${cfg.portfolio.url.replace("https://", "")}  |  ${new Date().toLocaleDateString(lang === "en" ? "en-US" : "fr-FR")}`,
            M, H - 8
        );
    }

    // ═══════════════════════════════════════════════════════
    // HEADER — dark block with circular photo, name, title, contact
    // ═══════════════════════════════════════════════════════

    const headerH = 56;
    const photoSize = 30;
    const photoX = M + 3;
    const photoY = (headerH - photoSize) / 2;
    const hasPhoto = !!profileImg;
    const textLeft = hasPhoto ? photoX + photoSize + 7 : M;
    // Contact column width: reserve ~55mm on the right for contact
    const contactColW = 55;
    const contactRightX = W - M;

    // Dark bg
    doc.setFillColor(...rgb(N.bg));
    doc.rect(0, 0, W, headerH, "F");

    // Accent bottom line
    doc.setFillColor(...rgb(N.frost3));
    doc.rect(0, headerH, W, 1.2, "F");

    // Profile photo — already circular from canvas crop
    if (hasPhoto && profileImg) {
        doc.setFillColor(...rgb(N.frost3));
        doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2 + 1, "F");
        doc.addImage(profileImg, "PNG", photoX, photoY, photoSize, photoSize);
    }

    // Name — left side
    setFont("bold");
    doc.setFontSize(18);
    setC(N.fg);
    doc.text(cfg.header.name, textLeft, 14);

    // Title — below name
    setFont("normal");
    doc.setFontSize(10.5);
    setC(N.frost2);
    doc.text(cfg.header.title, textLeft, 21);

    // Badges in header — below title, constrained to left side
    const heroBadges = cfg.header.badges.map(b => ({
        label: b.label,
        bg: resolveColor(b.color),
        fg: b.color === "frost2" || b.color === "green" ? N.bg : N.white,
    }));
    // Custom inline badges for header to avoid overflow into contact column
    let hbx = textLeft;
    let hby = 26;
    heroBadges.forEach(b => {
        doc.setFontSize(7);
        setFont("normal");
        const tw = doc.getTextWidth(b.label) + 6;
        if (hbx + tw > W - M - contactColW - 2) { hbx = textLeft; hby += 7; }
        doc.setFillColor(...rgb(b.bg));
        doc.roundedRect(hbx, hby, tw, 5, 1.5, 1.5, "F");
        setC(b.fg);
        doc.text(b.label, hbx + 3, hby + 3.6);
        hbx += tw + 2;
    });

    // Contact — right column, vertically centered
    setFont("normal");
    doc.setFontSize(7.5);
    setC(N.fg2);
    const contact = [
        cfg.header.contact.email,
        cfg.header.contact.phone,
        cfg.header.contact.location,
        cfg.header.contact.linkedin,
        cfg.header.contact.github,
    ];
    const contactBlockH = contact.length * 4.5;
    const contactStartY = (headerH - contactBlockH) / 2 + 4;
    contact.forEach((l, i) => {
        doc.text(l, contactRightX, contactStartY + i * 4.5, { align: "right" });
    });

    // Portfolio URL in header bottom-right
    if (cfg.portfolio.enabled) {
        doc.setFontSize(7);
        setC(N.frost1);
        doc.text(cfg.portfolio.url.replace("https://", ""), contactRightX, headerH - 3, { align: "right" });
    }

    // ═══════════════════════════════════════════════════════
    // ACCROCHE — blockquote style
    // ═══════════════════════════════════════════════════════

    y = headerH + 6;

    setFont("normal");
    doc.setFontSize(8.5);
    setC(N.muted);
    const accrocheLines = doc.splitTextToSize(cfg.accroche, CW - 8);
    const accrocheH = accrocheLines.length * 3.8;

    // Accent bar — thicker, visible
    doc.setFillColor(...rgb(N.frost3));
    doc.roundedRect(M, y - 1, 2, accrocheH + 3, 0.8, 0.8, "F");

    doc.text(accrocheLines, M + 6, y + 2);
    y += accrocheH + 6;
    setFont("normal");

    // ═══════════════════════════════════════════════════════
    // STATS — inline badges
    // ═══════════════════════════════════════════════════════

    const statItems = cfg.stats.line.split("|").map(s => s.trim());
    let statX = M;
    statItems.forEach(s => {
        doc.setFontSize(7.5);
        setFont("bold");
        const tw = doc.getTextWidth(s) + 6;
        if (statX + tw > W - M) { statX = M; y += 7; }
        doc.setFillColor(...rgb(N.frost4));
        doc.roundedRect(statX, y, tw, 5, 1.5, 1.5, "F");
        setC(N.white);
        doc.text(s, statX + 3, y + 3.6);
        statX += tw + 2.5;
    });
    setFont("normal");
    y += 9;

    // ═══════════════════════════════════════════════════════
    // EXPERIENCES PROFESSIONNELLES
    // ═══════════════════════════════════════════════════════

    sectionBar(cfg.sectionTitles.experiences, N.frost4);

    const filteredExp = cfg.experiencesFilter.enabled && cfg.experiencesFilter.includeIds.length > 0
        ? experiences.filter(e => cfg.experiencesFilter.includeIds.includes(e.id))
        : experiences;

    filteredExp.forEach((exp, idx) => {
        newPage(35);

        setFont("bold");
        doc.setFontSize(11);
        setC(N.bg);
        doc.text(exp.title, M, y);

        setFont("normal");
        doc.setFontSize(8.5);
        setC(N.frost4);
        doc.text(`${exp.company}  |  ${exp.period}`, W - M, y, { align: "right" });
        y += 5;

        doc.setFontSize(8);
        setC(N.muted);
        doc.text(`${exp.type}  -  ${exp.location}`, M, y);
        y += 4.5;

        setFont("normal");
        doc.setFontSize(8.5);
        setC(N.muted);
        const dl = doc.splitTextToSize(exp.description, CW);
        doc.text(dl, M, y);
        y += dl.length * 3.8 + 2;
        setFont("normal");

        exp.achievements.forEach(a => bullet(a));
        y += 1;

        if (exp.technologies.length > 0) {
            newPage(10);
            y = badgesRow(exp.technologies.map(t => ({ label: t, bg: N.frost2, fg: N.bg })), M, y);
        }

        if (idx < filteredExp.length - 1) { y += 1; line(); }
    });

    y += 4;

    // ═══════════════════════════════════════════════════════
    // PROJETS FREELANCE
    // ═══════════════════════════════════════════════════════

    if (cfg.freelance.enabled) {
        sectionBar(cfg.freelance.sectionTitle, N.green);

        cfg.freelance.projects.forEach((proj, idx) => {
            newPage(20);

            setFont("bold");
            doc.setFontSize(10);
            setC(N.bg);
            doc.text(proj.title, M, y);

            setFont("normal");
            doc.setFontSize(8.5);
            setC(N.green);
            doc.text(`${proj.client}  |  ${proj.period}`, W - M, y, { align: "right" });
            y += 5;

            setFont("normal");
            doc.setFontSize(8.5);
            setC(N.muted);
            const pLines = doc.splitTextToSize(proj.description, CW);
            doc.text(pLines, M, y);
            y += pLines.length * 3.8 + 2;
            setFont("normal");

            newPage(10);
            y = badgesRow(proj.technologies.map(t => ({ label: t, bg: N.frost2, fg: N.bg })), M, y);

            if (proj.link) {
                doc.setFontSize(7.5);
                setC(N.frost2);
                doc.text(proj.link, M, y);
                y += 4;
            }

            if (idx < cfg.freelance.projects.length - 1) { y += 1; line(); }
        });

        // Services summary
        y += 2;
        setFont("bold");
        doc.setFontSize(9);
        setC(N.green);
        doc.text(cfg.sectionTitles.servicesLabel, M, y);
        y += 5;
        cfg.freelance.services.forEach(s => bullet(s, 2));

        // // Portfolio CTA
        // if (cfg.portfolio.enabled) {
        //     y += 2;
        //     setFont("normal");
        //     doc.setFontSize(8.5);
        //     setC(N.frost2);
        //     doc.text(`Voir tous les projets : ${cfg.portfolio.url}`, M, y);
        //     y += 5;
        // }

        y += 4;
    }

    // ═══════════════════════════════════════════════════════
    // COMPETENCES TECHNIQUES
    // ═══════════════════════════════════════════════════════

    sectionBar(cfg.sectionTitles.skills, N.frost3);

    const catMap: Record<string, { label: string; accent: string }> = {
        Backend: { label: cfg.skillCategories.Backend, accent: N.frost4 },
        DevOps: { label: cfg.skillCategories.DevOps, accent: N.orange },
        Database: { label: cfg.skillCategories.Database, accent: N.green },
        Frontend: { label: cfg.skillCategories.Frontend, accent: N.frost2 },
        Tools: { label: cfg.skillCategories.Tools, accent: N.yellow },
    };

    cfg.skillsFilter.categories.forEach(cat => {
        const items = skills.filter(s => s.category === cat);
        if (!items.length) return;
        const info = catMap[cat] || { label: cat, accent: N.frost4 };
        newPage(14);
        setFont("bold");
        doc.setFontSize(9);
        setC(info.accent);
        doc.text(info.label, M, y);
        y += 5;
        y = badgesRow(items.map(s => ({ label: `${s.name} (${s.level}%)`, bg: N.bg2, fg: N.fg })), M, y);
        y += 1;
    });

    // Soft Skills badges
    if (cfg.skillsFilter.showSoftSkillsBadges) {
        newPage(14);
        setFont("bold");
        doc.setFontSize(9);
        setC(N.purple);
        doc.text("Soft Skills", M, y);
        y += 5;
        y = badgesRow(skills.filter(s => s.category === "Soft Skills").map(s => ({ label: s.name, bg: N.purple, fg: N.white })), M, y);
        y += 4;
    }

    // ═══════════════════════════════════════════════════════
    // FORMATION
    // ═══════════════════════════════════════════════════════

    sectionBar(cfg.sectionTitles.education, N.green);

    const filteredEdu = cfg.educationFilter.enabled && cfg.educationFilter.includeIds.length > 0
        ? education.filter(e => cfg.educationFilter.includeIds.includes(e.id))
        : education;

    filteredEdu.forEach(edu => {
        newPage(18);
        setFont("bold");
        doc.setFontSize(10);
        setC(N.bg);
        const degLines = doc.splitTextToSize(edu.degree, CW * 0.7);
        doc.text(degLines, M, y);

        setFont("normal");
        doc.setFontSize(8.5);
        setC(N.frost4);
        doc.text(edu.period, W - M, y, { align: "right" });
        y += degLines.length * 4.2 + 1;

        doc.setFontSize(8.5);
        setC(N.muted);
        doc.text(edu.school, M, y);
        y += 4;

        if (edu.honors) {
            doc.setFontSize(8);
            setC(N.green);
            doc.text(edu.honors, M, y);
            y += 4;
        }

        if (edu.description) {
            setFont("normal");
            doc.setFontSize(8);
            setC(N.muted);
            const el = doc.splitTextToSize(edu.description, CW);
            doc.text(el, M, y);
            y += el.length * 3.5 + 1;
            setFont("normal");
        }
        y += 3;
    });

    // ═══════════════════════════════════════════════════════
    // CERTIFICATIONS
    // ═══════════════════════════════════════════════════════

    if (cfg.certificationsEnabled) {
        sectionBar(cfg.sectionTitles.certifications, N.yellow);
        certifications.forEach(cert => {
            newPage(12);
            setFont("bold");
            doc.setFontSize(9);
            setC(N.bg);
            doc.text(cert.name, M, y);
            setFont("normal");
            doc.setFontSize(8);
            setC(N.muted);
            doc.text(`${cert.issuer}  |  ${cert.date}`, W - M, y, { align: "right" });
            y += 6;
        });
        y += 2;
    }

    // ═══════════════════════════════════════════════════════
    // PRIX, HACKATHONS & COMPETITIONS (fusionné)
    // ═══════════════════════════════════════════════════════

    if (cfg.hackathonsEnabled) {
        sectionBar(cfg.sectionTitles.hackathons, N.orange);
        autoTable(doc, {
            startY: y,
            head: [lang === "en"
                ? ["Event", "Result", "Date", "Organization", "Technologies"]
                : ["Evenement", "Resultat", "Date", "Organisation", "Technologies"]],
            body: communityEvents.map(ev => [
                ev.name,
                ev.role.replace(/[\u{1F600}-\u{1FAFF}]/gu, "").trim(),
                ev.date,
                ev.organization,
                (ev.technologies || []).join(", ") || "-",
            ]),
            styles: { fontSize: 7.5, cellPadding: 2.5, textColor: rgb(N.bg), lineColor: rgb(N.fg2), lineWidth: 0.15, font: mainFont },
            headStyles: { fillColor: rgb(N.orange), textColor: rgb(N.white), fontStyle: "bold", fontSize: 8 },
            alternateRowStyles: { fillColor: [245, 247, 250] },
            columnStyles: { 0: { cellWidth: 42 }, 1: { cellWidth: 38 }, 2: { cellWidth: 20 }, 3: { cellWidth: 36 }, 4: { cellWidth: 34 } },
            theme: "grid",
            margin: { left: M, right: M },
        });
        y = (doc as any).lastAutoTable?.finalY + 8 || y + 40;
    }

    // ═══════════════════════════════════════════════════════
    // ENGAGEMENTS COMMUNAUTAIRES
    // ═══════════════════════════════════════════════════════

    if (cfg.communityEnabled) {
        sectionBar(cfg.sectionTitles.community, N.purple);
        communityActivities.forEach(act => {
            newPage(22);
            setFont("bold");
            doc.setFontSize(10);
            setC(N.bg);
            doc.text(act.role, M, y);
            y += 4.5;
            setFont("normal");
            doc.setFontSize(8.5);
            setC(N.purple);
            doc.text(`${act.organization}  |  ${act.period}`, M, y);
            y += 4.5;
            setFont("normal");
            doc.setFontSize(8.5);
            setC(N.bg3);
            const al = doc.splitTextToSize(act.description, CW);
            doc.text(al, M, y);
            y += al.length * 3.8 + 2;
            setFont("normal");
            if (act.impact) act.impact.forEach(imp => bullet(imp, 2));
            if (act.participants) {
                doc.setFontSize(8);
                setC(N.green);
                doc.text(`${act.participants} ${lang === "en" ? "people impacted" : "personnes impactees"}`, M + 2, y);
                y += 4;
            }
            y += 2;
        });
    }

    // ═══════════════════════════════════════════════════════
    // FOOTER
    // ═══════════════════════════════════════════════════════

    newPage(14);
    line();
    setFont("normal");
    doc.setFontSize(8);
    setC(N.muted);
    doc.text(cfg.footer.line1, M, y);
    y += 4;
    setFont("normal");
    doc.text(cfg.footer.line2, M, y);

    // Page footers + page numbers
    const total = doc.getNumberOfPages();
    for (let p = 1; p <= total; p++) {
        doc.setPage(p);
        pageFooter();
        setFont("normal");
        doc.setFontSize(7);
        setC(N.muted);
        doc.text(`${p} / ${total}`, W - M, H - 8, { align: "right" });
    }

    doc.save(cfg.meta.filename);
}
