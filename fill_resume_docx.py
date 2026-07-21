from copy import deepcopy
from pathlib import Path
import tempfile
import zipfile
import xml.etree.ElementTree as ET

SOURCE = Path("/home/ubuntu/project/apply/2026_1/미리비트/이력서_양식.docx")
OUTPUT = Path("/home/ubuntu/project/Portfolio/PF/김재환_이력서_경력기술서.docx")

W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
NS = {"w": W}
ET.register_namespace("w", W)
ET.register_namespace("w14", "http://schemas.microsoft.com/office/word/2010/wordml")
ET.register_namespace("wpc", "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas")
ET.register_namespace("mc", "http://schemas.openxmlformats.org/markup-compatibility/2006")
ET.register_namespace("r", "http://schemas.openxmlformats.org/officeDocument/2006/relationships")
ET.register_namespace("wp", "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing")
ET.register_namespace("a", "http://schemas.openxmlformats.org/drawingml/2006/main")
ET.register_namespace("pic", "http://schemas.openxmlformats.org/drawingml/2006/picture")


def text_of(node):
    return "".join(t.text or "" for t in node.findall(".//w:t", NS)).strip()


def set_text(node, value):
    texts = node.findall(".//w:t", NS)
    if texts:
        texts[0].text = value
        for extra in texts[1:]:
            extra.text = ""
        return
    paragraph = node.find("./w:p", NS)
    if paragraph is None:
        paragraph = ET.SubElement(node, f"{{{W}}}p")
    run = ET.SubElement(paragraph, f"{{{W}}}r")
    text = ET.SubElement(run, f"{{{W}}}t")
    text.text = value


def replace_exact(root, old, new):
    for node in root.iter():
        if node.tag == f"{{{W}}}t" and (node.text or "") == old:
            node.text = new


def replace_paragraph(root, old, new):
    for paragraph in root.findall(".//w:p", NS):
        if text_of(paragraph) == old:
            set_text(paragraph, new)


def cells(table, row):
    return table.findall("./w:tr", NS)[row].findall("./w:tc", NS)


def put(table, row, col, value):
    set_text(cells(table, row)[col], value)


with zipfile.ZipFile(SOURCE) as source_zip:
    root = ET.fromstring(source_zip.read("word/document.xml"))
    tables = root.findall(".//w:tbl", NS)

    # 기본 정보
    basic = tables[0]
    put(basic, 0, 3, "김재환")
    put(basic, 0, 5, "Kim Jae Hwan")
    put(basic, 0, 7, "金載桓")
    put(basic, 1, 3, "990225-1351623")
    put(basic, 1, 5, "27세")
    put(basic, 2, 3, "010-3541-7257")
    put(basic, 2, 5, "-")
    put(basic, 3, 3, "cbkjh0225@gmail.com")
    put(basic, 3, 5, "GitHub: github.com/Jaeboong")
    # 사용자가 이미 입력한 주소는 그대로 유지한다.

    # 학력·경력·교육·자격
    history = tables[1]
    put(history, 1, 0, "2019.03 ~ 2025.08")
    put(history, 1, 1, "고려대학교 세종캠퍼스\n컴퓨터융합소프트웨어학과")
    put(history, 1, 2, "3.0/4.5")
    put(history, 1, 3, "졸업")
    put(history, 3, 0, "경력사항 (인턴 3개월)")
    put(history, 5, 0, "2025.06 ~ 2025.08")
    put(history, 5, 1, "블루로봇")
    put(history, 5, 2, "인턴")
    put(history, 5, 3, "Kotlin·JavaFX 기반 실시간 2D 등고선 시각화 모듈 단독 개발")
    put(history, 9, 0, "2024.03 ~ 2025.08")

    # 템플릿 예시 기술을 실제 역량으로 교체
    skills = tables[2]
    put(skills, 1, 0, "백엔드 · AI Agent 개발자")
    skill_rows = [
        (3, "Backend", "Java 17 · Spring Boot · JPA", "상"),
        (4, "", "MyBatis · QueryDSL · Spring Security", "중상"),
        (5, "", "Python · FastAPI · WebSocket", "중상"),
        (6, "", "REST API · MVC · 트랜잭션 설계", "상"),
        (7, "Database", "PostgreSQL · MariaDB", "상"),
        (8, "", "Redis 캐시 · 실시간 집계", "중상"),
        (9, "", "DB 스키마 · 인덱스 · 정합성 설계", "상"),
        (10, "AI / Agent", "LLM · RAG · Embedding", "중상"),
        (11, "", "Multi-Agent Orchestration · MCP", "중상"),
        (12, "", "PyTorch · Hugging Face · Fine-tuning", "중"),
        (13, "", "Claude · Codex · Gemini 연동", "중상"),
        (14, "Infra / OS", "Linux · Ubuntu · Nginx", "중상"),
        (15, "", "AWS · OCI · S3", "중"),
        (16, "Container", "Docker · Docker Compose", "중상"),
        (17, "CI/CD", "Jenkins · GitHub Actions", "중상"),
        (18, "Observability", "Prometheus · Grafana · Loki", "중"),
        (19, "Frontend", "React · Vue.js", "중"),
        (20, "Collaboration", "Git · GitHub · Jira", "중상"),
        (21, "", "API 명세 · ERD · 코드 리뷰", "중상"),
        (22, "Architecture", "역할 분리 · 유지보수성 · 데이터 정합성", "상"),
        (23, "", "컨테이너 격리 · 병렬 에이전트 실행", "중상"),
    ]
    for row, category, tech, level in skill_rows:
        put(skills, row, 1, category)
        put(skills, row, 2, tech)
        put(skills, row, 3, level)

    tool_rows = [
        (24, "언어", "Java · Kotlin · TypeScript", "상/중"),
        (25, "", "Python · JavaScript", "중상"),
        (26, "Framework", "Spring Boot · FastAPI · React", "중상"),
        (27, "Data", "PostgreSQL · MariaDB · Redis", "상"),
        (28, "스크립트", "Shell Script", "중"),
        (29, "버전관리", "Git · GitHub", "중상"),
        (30, "Infra", "Docker · Nginx · AWS · OCI", "중상"),
        (31, "커뮤니케이션", "Jira · Discord · Notion", "중상"),
    ]
    for row, category, tech, level in tool_rows:
        put(skills, row, 1, category)
        put(skills, row, 2, tech)
        put(skills, row, 3, level)
    put(skills, 32, 1, "설계 기준과 근거를 문서화하고 팀과 공유")
    put(skills, 32, 2, "")
    put(skills, 33, 1, "문제를 구조화하고 반복 작업을 자동화")
    put(skills, 33, 2, "")

    # 경력/대표 프로젝트 기술서 3건
    entries = [
        {
            "company": "블루로봇 (BLUEROBOT)", "dept": "프로젝트 인턴", "rank": "인턴",
            "project": "밸런스 스테이지 측정 데이터 시각화 모듈", "period": "2025.06 ~ 2025.08",
            "role": "Kotlin·JavaFX Graphics 기반 실시간 2D 등고선 맵 모듈 단독 설계·개발. 기존 UI 호환성과 재사용성을 고려해 구조화하고 정기 회의 피드백을 반영.",
            "tech": "Kotlin, JavaFX, 2D Visualization"
        },
        {
            "company": "개인 프로젝트", "dept": "자소전", "rank": "1인 개발",
            "project": "멀티에이전트 자기소개서 검토 오케스트레이터", "period": "2026.04 ~ 현재",
            "role": "Claude·Codex·Gemini를 역할별로 연결한 Researcher–Coordinator–Drafter–Reviewer–Finalizer 파이프라인 설계. 취소 신호 전파, 중단 지점 상태 재해석 및 복귀 로직 구현.",
            "tech": "TypeScript, React, Fastify, PostgreSQL, Redis, WebSocket, Docker"
        },
        {
            "company": "신한은행 해커톤 with SSAFY", "dept": "Campung", "rank": "백엔드·인프라",
            "project": "GPS 기반 캠퍼스 커뮤니티 서비스", "period": "2025.08",
            "role": "게시글·랜드마크 API, GPT 감정 분석 배치, Redis 기반 24시간 HOT 게시글 집계, CI/CD 및 배포 담당. 백엔드·인프라를 단독 구축하여 대상 수상.",
            "tech": "Java 17, Spring Boot 3, MariaDB, Redis, Docker, GitHub Actions, S3"
        },
    ]
    for table, entry in zip(tables[3:6], entries):
        put(table, 0, 1, entry["company"])
        put(table, 0, 3, entry["dept"])
        put(table, 0, 5, entry["rank"])
        put(table, 1, 1, entry["project"])
        put(table, 1, 3, entry["period"])
        put(table, 2, 1, entry["role"])
        put(table, 3, 1, entry["tech"])

    replace_paragraph(root, "학력사항 (최종학력: 학점은행제 컴퓨터공학과 졸업)",
                      "학력사항 (최종학력: 고려대학교 세종캠퍼스 컴퓨터융합소프트웨어학과 졸업)")
    replace_exact(root, "개발 및 연구 경력", "개발 및 프로젝트 경력")

    document_xml = ET.tostring(root, encoding="utf-8", xml_declaration=True)
    with zipfile.ZipFile(OUTPUT, "w", zipfile.ZIP_DEFLATED) as output_zip:
        for item in source_zip.infolist():
            data = document_xml if item.filename == "word/document.xml" else source_zip.read(item.filename)
            output_zip.writestr(item, data)

print(OUTPUT)
