const timelineStations = [
  {
    id: "seed-c-club",
    periodLabel: "2017.03 - 2017.12",
    sortKey: 10,
    title: "고2·C언어 동아리",
    subtitle: "Seed Stop",
    type: "micro",
    summary: "프로그래밍을 처음 접한 출발점",
    details: [
      "짧은 동아리 활동 속에서 코드로 결과를 만드는 감각을 처음 습득"
    ],
    tags: ["C"],
    awards: [],
    branchFrom: null
  },
  {
    id: "highschool-grad",
    periodLabel: "2019.02",
    sortKey: 20,
    title: "고등학교 졸업",
    subtitle: "Milestone",
    type: "milestone",
    summary: "막연한 흥미가 진로 방향으로 구체화되기 시작한 시기",
    details: [
      "프로그래밍을 지속하고 싶다는 생각이 진로 선택으로 연결",
      "이후 학습과 프로젝트의 출발점"
    ],
    tags: ["전공 확정", "개발자로서의 시작"],
    awards: [],
    branchFrom: null
  },
  {
    id: "college-lower-years",
    periodLabel: "2019.03 - 2021.04",
    sortKey: 30,
    title: "대학교 1·2학년",
    subtitle: "Foundation Segment",
    type: "milestone",
    summary: "전공 언어를 폭넓게 익히며 개발 기본기를 축적한 시기",
    details: [
      "C·C++·Python·Java를 학습하며 언어별 사고방식과 구현 감각 확장",
      "전공 수업을 통해 개발을 장기 진로로 인식하기 시작"
    ],
    tags: ["C", "C++", "Python", "Java"],
    awards: [],
    branchFrom: null
  },
  {
    id: "military-service",
    periodLabel: "2021.05 - 2022.11",
    sortKey: 40,
    title: "군 복무",
    subtitle: "Transfer",
    type: "milestone",
    summary: "루틴과 책임감을 체화한 전환 구간",
    details: [
      "대형 차량 운용·분대장 역할 수행, 책임감과 기본기 강화",
      "성실한 복무 태도를 인정받아 대대 모범용사 표창 수상",
      "장기 루틴을 견디는 힘이 프로젝트 완수 태도로 연결"
    ],
    tags: ["책임감", "루틴"],
    awards: ["대대 모범용사 표창"],
    branchFrom: null
  },
  {
    id: "college-upper-years",
    periodLabel: "2023.03 - 2024.12",
    sortKey: 45,
    title: "대학교 3·4학년",
    subtitle: "Core CS Segment",
    type: "milestone",
    summary: "복학 후 CS 기초를 백엔드 관점의 기반으로 다진 시기",
    details: [
      "운영체제·네트워크·데이터베이스·Linux 집중 학습",
      "시스템 과목 학습이 백엔드 설계·인프라 이해의 기반으로 작용"
    ],
    tags: ["운영체제", "네트워크", "데이터베이스", "Linux"],
    awards: ["SQLD 2024"],
    branchFrom: null
  },
  {
    id: "likelion-udr",
    periodLabel: "2024.03 - 2025.08",
    sortKey: 50,
    title: "멋쟁이사자처럼 12기 / UDR",
    subtitle: "First Hub",
    type: "hub",
    summary: "웹 개발이 취미에서 진로로 전환된 첫 분기점",
    details: [
      "UDR에서 웹 개발 입문, Node.js CRUD 기반 백엔드 감각 습득",
      "REST API·MVC·Git Convention·코드 리뷰를 협업 방식으로 체화, 이후 프로젝트 기준 정립",
      "운영진·멘토링 경험으로 팀 단위 개발로 시야 확장"
    ],
    tags: ["Node.js", "REST API", "Git Convention", "Mentoring"],
    awards: [],
    branchFrom: null
  },
  {
    id: "cheating-day",
    periodLabel: "2024.03 - 2024.08",
    sortKey: 51,
    title: "치팅데이",
    subtitle: "중앙 해커톤 프로젝트",
    type: "branch",
    summary: "중앙 해커톤 AI 건강관리 앱 개발, 해커톤의 리듬과 한계를 함께 학습한 프로젝트",
    details: [
      "AI 음식 이미지 분석·BMR 계산 API·캘린더 기록 시스템 담당, 백엔드 리드",
      "초기 속도는 확보했으나 구조·기준 없는 진행의 한계를 체감"
    ],
    tags: ["Node.js", "Express", "MariaDB", "React"],
    awards: [],
    branchFrom: "likelion-udr"
  },
  {
    id: "operations-mentoring",
    periodLabel: "2025.01 - 2025.08",
    sortKey: 53,
    title: "운영진·멘토링",
    subtitle: "Extension",
    type: "branch",
    summary: "API 명세서·ERD·개발 설계 중심으로 후배 프로젝트를 멘토링한 시기",
    details: [
      "운영진으로서 후배 팀 API 명세서·ERD 검토 및 구조 개선 멘토링 진행",
      "기능 구현 이전 설계 정리 습관이 프로젝트 완성도를 좌우함을 전달"
    ],
    tags: ["API 명세서", "ERD", "개발 설계"],
    awards: [],
    branchFrom: "likelion-udr"
  },
  {
    id: "sequence",
    periodLabel: "2024.10 - 2025.06",
    sortKey: 60,
    title: "Sequence",
    subtitle: "First Long Project",
    type: "project",
    summary: "Spring Boot 백엔드를 장기간 끌고 간 첫 장기 프로젝트",
    details: [
      "대학 간 PM·디자이너·개발자 팀 구성 플랫폼의 필요성을 판단해 개발 착수",
      "Spring Boot·JPA·QueryDSL·Spring Security·Docker 환경으로 협업형 백엔드 기초 체력 확보"
    ],
    imageSrc: "img/sequence/1.png",
    tags: ["Spring Boot", "JPA", "QueryDSL", "Security", "Docker"],
    awards: [],
    branchFrom: null
  },
  {
    id: "bluerobot",
    periodLabel: "2025.06 - 2025.08",
    sortKey: 70,
    title: "블루로봇 인턴",
    subtitle: "Practical Build",
    type: "project",
    summary: "현업 환경에서 독립 모듈을 끝까지 설계·구현한 첫 실무 경험",
    details: [
      "Kotlin·JavaFX Graphics 기반 밸런스 스테이지 측정 데이터를 실시간 2D 등고선 맵으로 시각화하는 모듈 단독 개발",
      "기존 UI 호환 + 재사용 가능한 구조로 구현, 실무형 모듈 설계 감각 습득"
    ],
    tags: ["Kotlin", "JavaFX", "2D Visualization"],
    awards: [],
    branchFrom: null
  },
  {
    id: "ssafy14",
    periodLabel: "2025.07 - 2026.06",
    sortKey: 80,
    title: "SSAFY 14기",
    subtitle: "Major Hub",
    type: "hub",
    summary: "기본기와 실전 프로젝트를 압축 반복한 두 번째 분기점",
    details: [
      "알고리즘·Java·Spring Boot·데이터베이스·AI 압축 학습으로 기본기 재정렬",
      "단기 프로젝트 반복으로 기획·설계·개발·배포 전 과정 완수 감각 체화"
    ],
    tags: ["Java", "Spring Boot", "DB", "AI", "Algorithm"],
    awards: [],
    branchFrom: null
  },
  {
    id: "campung",
    periodLabel: "2025.08",
    sortKey: 81,
    title: "Campung",
    subtitle: "Hackathon Branch",
    type: "branch",
    summary: "문제 정의와 구현 완성도를 함께 맞춰 대상까지 이어진 해커톤 프로젝트",
    details: [
      "신한 해커톤 with SSAFY에서 게시글·랜드마크·AI 감정 분석 API·캠퍼스 온도 집계·CI/CD·배포 담당",
      "GPT 기반 배치 감정 분석·Redis 집계 구조 설계, 비용과 실시간성 동시 고려"
    ],
    imageSrc: "img/campung/1.png",
    tags: ["Spring Boot", "Redis", "Docker", "CI/CD", "S3"],
    awards: ["신한 해커톤 대상 2025"],
    branchFrom: "ssafy14"
  },
  {
    id: "triptube",
    periodLabel: "2025.11 - 2025.12",
    sortKey: 82,
    title: "TripTube",
    subtitle: "Semantic Search",
    type: "branch",
    summary: "유튜브 자막을 여행 정보로 구조화하며 AI 서버 분리 감각을 익힌 프로젝트",
    details: [
      "YouTube 자막 추출·GPT 구조화·벡터 임베딩 파이프라인을 묶어 자연어 기반 여행 검색 흐름 구현",
      "Spring Boot 서비스 서버와 FastAPI 검색 서버 분리, 역할별 배포·유지보수성 체감"
    ],
    tags: ["Spring Boot", "FastAPI", "Vector DB", "Embedding"],
    awards: [],
    branchFrom: "ssafy14"
  },
  {
    id: "hearbe",
    periodLabel: "2026.01 - 2026.02",
    sortKey: 83,
    title: "HearBe",
    subtitle: "Voice Pipeline",
    type: "branch",
    summary: "실시간 음성 파이프라인과 AI 레이턴시 문제를 정면으로 다룬 프로젝트",
    details: [
      "ASR·NLU·LLM·TTS를 연결해 음성만으로 이어지는 쇼핑 흐름 구조 구현",
      "WebSocket 기반 실시간 세션 처리·AI 파이프라인 분리 구조 구현, 레이턴시·오류 처리가 사용자 경험에 직결됨을 체감"
    ],
    imageSrc: "img/hearbe/1.png",
    tags: ["FastAPI", "WebSocket", "Whisper", "LLM", "TTS"],
    awards: [],
    branchFrom: "ssafy14"
  },
  {
    id: "moa",
    periodLabel: "2026.02 - 2026.03",
    sortKey: 84,
    title: "모아(MOA)",
    subtitle: "Finance Branch",
    type: "branch",
    summary: "데이터 기준점과 서비스 신뢰를 가장 본격적으로 다룬 금융 프로젝트",
    details: [
      "외부 금융 API와 로컬 DB의 기준점 차이를 계좌 동기화·정합성 처리로 보완, 분석·예산·목표 기능 안정화",
      "팀장으로서 백엔드·인프라 총괄, 금융 도메인에서 기준점 우선 설계의 중요성 체감"
    ],
    imageSrc: "img/moa/4.png",
    tags: ["Spring Boot", "FastAPI", "PostgreSQL", "Docker", "Open API"],
    awards: [],
    branchFrom: "ssafy14"
  },
  {
    id: "present",
    periodLabel: "2026.04",
    sortKey: 90,
    title: "현재",
    subtitle: "Terminal",
    type: "current",
    summary: "정합성과 유지보수성을 우선하는 백엔드 개발자로 자신을 정의하는 시점",
    details: [
      "빠른 기능 추가보다 오래 버티는 기준점·구조 설계를 우선 고려",
      "다양한 서비스 환경에서 신뢰 가능한 데이터 흐름·구조 설계로 심화 지향"
    ],
    tags: ["Back-End", "Architecture", "Infra", "AI 활용"],
    awards: [],
    branchFrom: null
  }
];

const state = {
  hoverStopId: null,
  focusStopId: null,
  canHover: window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  layoutColumns: null,
  pathSyncTimer: null
};

const orderedStations = [...timelineStations].sort((left, right) => left.sortKey - right.sortKey);
const stationLookup = new Map(orderedStations.map((station) => [station.id, station]));
const displayStops = orderedStations;
const HERO_PRACTICAL_BUILD_IDS = new Set(["bluerobot"]);
const heroProjectEntries = orderedStations.filter((station) => {
  if (station.id === "operations-mentoring") {
    return false;
  }

  return station.type === "project" || station.type === "branch";
});
const HERO_SUMMARY = {
  awards: [
    "신한 해커톤 대상 2025",
    "SQLD 2024",
    "대대 모범용사 표창"
  ],
  education: [
    "컴퓨터공학 전공 과정",
    "멋쟁이사자처럼 12기",
    "SSAFY 14기"
  ],
  workStyle: [
    {
      title: "Integrity First.",
      description: "정합성과 기준점 우선"
    },
    {
      title: "Maintainable.",
      description: "구조와 역할 분리 우선"
    },
    {
      title: "Service Fit.",
      description: "서비스별 기준 설계"
    }
  ]
};
const LAYOUT_LIMITS = {
  minStopWidth: 182,
  preferredStopWidth: 236,
  minGap: 18,
  maxGap: 28,
  maxColumns: 6
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHeroSummaryList(items) {
  return `
    <ul class="hero-summary__list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderHeroSummary() {
  const target = document.querySelector("#hero-summary");

  if (!target) {
    return;
  }

  const practicalBuildCount = heroProjectEntries.filter((station) => HERO_PRACTICAL_BUILD_IDS.has(station.id)).length;
  const projectCount = heroProjectEntries.length - practicalBuildCount;

  target.innerHTML = `
    <div class="hero-summary__grid">
      <article class="hero-summary__panel hero-summary__panel--projects">
        <p class="hero-summary__label">PROJECTS<span>.</span></p>
        <div class="hero-summary__metric-block">
          <p class="hero-summary__metric">${heroProjectEntries.length}</p>
          <p class="hero-summary__metric-copy">Including Practical Build</p>
        </div>
        <p class="hero-summary__support">${projectCount} Projects + ${practicalBuildCount} Practical Build</p>
        <p class="hero-summary__note">타임라인의 실제 프로젝트와 실무 개발 경험 기준으로 계산했습니다.</p>
      </article>

      <article class="hero-summary__panel">
        <p class="hero-summary__label">AWARDS<span>.</span></p>
        ${renderHeroSummaryList(HERO_SUMMARY.awards)}
      </article>

      <article class="hero-summary__panel">
        <p class="hero-summary__label">EDUCATION<span>.</span></p>
        ${renderHeroSummaryList(HERO_SUMMARY.education)}
      </article>

      <article class="hero-summary__panel hero-summary__panel--work">
        <p class="hero-summary__label">WORK STYLE<span>.</span></p>
        <div class="hero-summary__flow" aria-label="업무 방식">
          ${HERO_SUMMARY.workStyle.map((item, index) => `
            <div class="hero-summary__flow-card${index > 0 ? " hero-summary__flow-card--linked" : ""}">
              <strong class="hero-summary__flow-title">${escapeHtml(item.title)}</strong>
              <span class="hero-summary__flow-copy">${escapeHtml(item.description)}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
  `;
}

function formatOrder(order) {
  return String(order).padStart(2, "0");
}

function clampValue(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function measureTimelineLayout(target) {
  const computedStyle = target ? window.getComputedStyle(target) : null;
  const edgeBuffer = Number.parseFloat(computedStyle?.getPropertyValue("--edge-buffer")) || 16;
  const availableWidth = Math.max((target?.clientWidth || 0) - edgeBuffer * 2, 320);
  const maxColumns = Math.min(displayStops.length, LAYOUT_LIMITS.maxColumns);
  const gap = clampValue(
    availableWidth * 0.0175,
    LAYOUT_LIMITS.minGap,
    LAYOUT_LIMITS.maxGap
  );

  let columns = clampValue(
    Math.floor((availableWidth + gap) / (LAYOUT_LIMITS.preferredStopWidth + gap)),
    1,
    maxColumns
  );

  while (columns > 1) {
    const stopWidth = (availableWidth - gap * (columns - 1)) / columns;
    if (stopWidth >= LAYOUT_LIMITS.minStopWidth) {
      break;
    }
    columns -= 1;
  }

  const stopWidth = (availableWidth - gap * (columns - 1)) / columns;

  return {
    availableWidth,
    edgeBuffer,
    gap,
    columns,
    stopWidth
  };
}

function applyTimelineLayout(target, layout) {
  target.style.setProperty("--row-columns", String(layout.columns));
  target.style.setProperty("--stop-gap", `${layout.gap}px`);
  target.style.setProperty("--stop-width", `${layout.stopWidth}px`);
  target.style.setProperty("--timeline-content-width", `${layout.availableWidth}px`);
}

function renderChips(item) {
  const chips = [];

  item.awards.forEach((award) => {
    chips.push(`<span class="timeline-card__chip timeline-card__chip--award">${escapeHtml(award)}</span>`);
  });

  item.tags.forEach((tag) => {
    chips.push(`<span class="timeline-card__chip">${escapeHtml(tag)}</span>`);
  });

  if (!chips.length) {
    return "";
  }

  return `<div class="timeline-card__chips">${chips.join("")}</div>`;
}

function renderDetails(item) {
  return `
    <ul class="timeline-card__details">
      ${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
    </ul>
  `;
}

function renderMedia(item) {
  if (!item.imageSrc) {
    return "";
  }

  return `
    <figure class="timeline-card__media">
      <img
        src="${escapeHtml(item.imageSrc)}"
        alt="${escapeHtml(item.title)} 프로젝트 이미지"
        loading="lazy"
        decoding="async"
      >
    </figure>
  `;
}

function renderCard(stop, order) {
  const classes = ["timeline-card"];

  if (stop.type === "hub") {
    classes.push("timeline-card--hub");
  }

  if (stop.type === "branch") {
    classes.push("timeline-card--branch");
  }

  if (stop.type === "current") {
    classes.push("timeline-card--current");
  }

  if (stop.imageSrc) {
    classes.push("timeline-card--with-media");
  }

  const branchSource = stop.branchFrom ? stationLookup.get(stop.branchFrom) : null;
  const branchHint = branchSource
    ? `<p class="timeline-card__branch-label">${escapeHtml(branchSource.title)} 이후의 경험입니다.</p>`
    : "";

  return `
    <article
      class="${classes.join(" ")}"
      tabindex="0"
      data-stop-trigger="${stop.id}"
    >
      <div class="timeline-card__main">
        <h3 class="timeline-card__title">${escapeHtml(stop.title)}</h3>
        ${renderChips(stop)}
      </div>
      <div class="timeline-card__expand">
        ${renderMedia(stop)}
        <p class="timeline-card__eyebrow">${formatOrder(order)}. ${escapeHtml(stop.subtitle)}</p>
        <p class="timeline-card__summary">${escapeHtml(stop.summary)}</p>
        ${renderDetails(stop)}
        ${branchHint}
      </div>
    </article>
  `;
}

function chunkStops(stops, size) {
  const rows = [];

  for (let index = 0; index < stops.length; index += size) {
    rows.push(stops.slice(index, index + size));
  }

  return rows;
}

function renderStop(stop, order, column, side) {
  return `
    <article
      class="snake-stop snake-stop--${stop.type} snake-stop--${side}"
      data-stop-id="${stop.id}"
      style="--column:${column};"
      role="listitem"
    >
      <div class="snake-stop__card-shell">
        ${renderCard(stop, order)}
      </div>
      <div class="snake-stop__node">
        <span class="snake-stop__index">${formatOrder(order)}.</span>
        <span class="snake-stop__dot" aria-hidden="true"></span>
        <span class="snake-stop__period">${escapeHtml(stop.periodLabel)}</span>
      </div>
    </article>
  `;
}

function renderRow(rowStops, rowIndex, startOrder, totalColumns) {
  const isForward = rowIndex % 2 === 0;
  const orderLookup = new Map(rowStops.map((stop, index) => [stop.id, startOrder + index + 1]));
  const visualStops = isForward ? rowStops : [...rowStops].reverse();
  const startColumn = isForward ? 1 : totalColumns - visualStops.length + 1;

  return `
    <section class="snake-row snake-row--${isForward ? "forward" : "reverse"}">
      <div class="snake-row__stops">
        ${visualStops.map((stop, index) => {
          const column = startColumn + index;
          const side = (rowIndex + index) % 2 === 0 ? "top" : "bottom";
          return renderStop(stop, orderLookup.get(stop.id), column, side);
        }).join("")}
      </div>
    </section>
  `;
}

function buildRoundedPath(points, radius = 18) {
  if (!points.length) {
    return "";
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const next = points[index + 1];

    if (!next) {
      path += ` L ${current.x} ${current.y}`;
      continue;
    }

    const inDx = current.x - previous.x;
    const inDy = current.y - previous.y;
    const outDx = next.x - current.x;
    const outDy = next.y - current.y;
    const sameAxis = (inDx === 0 && outDx === 0) || (inDy === 0 && outDy === 0);

    if (sameAxis) {
      path += ` L ${current.x} ${current.y}`;
      continue;
    }

    const maxRadius = Math.min(
      radius,
      Math.max(Math.abs(inDx), Math.abs(inDy)) / 2,
      Math.max(Math.abs(outDx), Math.abs(outDy)) / 2
    );

    if (!Number.isFinite(maxRadius) || maxRadius <= 0) {
      path += ` L ${current.x} ${current.y}`;
      continue;
    }

    const entry = {
      x: current.x - Math.sign(inDx) * maxRadius,
      y: current.y - Math.sign(inDy) * maxRadius
    };
    const exit = {
      x: current.x + Math.sign(outDx) * maxRadius,
      y: current.y + Math.sign(outDy) * maxRadius
    };

    path += ` L ${entry.x} ${entry.y} Q ${current.x} ${current.y} ${exit.x} ${exit.y}`;
  }

  return path;
}

function drawSnakePath() {
  const target = document.querySelector("#timeline-list");
  const svg = target?.querySelector(".timeline__path");

  if (!target || !svg) {
    return;
  }

  const targetRect = target.getBoundingClientRect();
  const geometry = displayStops
    .map((stop) => {
      const stopNode = target.querySelector(`[data-stop-id="${stop.id}"]`);
      const dot = stopNode?.querySelector(".snake-stop__dot");
      const cardShell = stopNode?.querySelector(".snake-stop__card-shell");

      if (!dot || !cardShell) {
        return null;
      }

      const dotRect = dot.getBoundingClientRect();
      const cardShellRect = cardShell.getBoundingClientRect();

      return {
        point: {
          x: dotRect.left - targetRect.left + dotRect.width / 2,
          y: dotRect.top - targetRect.top + dotRect.height / 2
        },
        stem: {
          x1: cardShellRect.left - targetRect.left + cardShellRect.width / 2,
          y1: cardShellRect.top - targetRect.top + cardShellRect.height / 2,
          x2: dotRect.left - targetRect.left + dotRect.width / 2,
          y2: dotRect.top - targetRect.top + dotRect.height / 2
        }
      };
    })
    .filter(Boolean);

  const points = geometry.map((item) => item.point);
  const stems = geometry.map((item) => item.stem);

  if (!points.length) {
    svg.innerHTML = "";
    return;
  }

  const width = Math.max(target.scrollWidth, Math.ceil(targetRect.width));
  const height = Math.max(target.scrollHeight, Math.ceil(targetRect.height));
  const pathData = buildRoundedPath(points);

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", String(width));
  svg.setAttribute("height", String(height));
  svg.innerHTML = `
    ${stems.map((stem) => `
      <line
        class="timeline__path-stem"
        x1="${stem.x1}"
        y1="${stem.y1}"
        x2="${stem.x2}"
        y2="${stem.y2}"
      ></line>
    `).join("")}
    <path class="timeline__path-glow" d="${pathData}"></path>
    <path class="timeline__path-line" d="${pathData}"></path>
  `;
}

function schedulePathSync() {
  window.requestAnimationFrame(drawSnakePath);

  if (state.pathSyncTimer) {
    window.clearTimeout(state.pathSyncTimer);
  }

  state.pathSyncTimer = window.setTimeout(() => {
    drawSnakePath();
    state.pathSyncTimer = null;
  }, 240);
}

function renderTimeline(force = false) {
  const target = document.querySelector("#timeline-list");
  if (!target) {
    return false;
  }

  const layout = measureTimelineLayout(target);
  applyTimelineLayout(target, layout);

  const shouldRender =
    force ||
    state.layoutColumns !== layout.columns ||
    !target.querySelector(".snake-row");

  if (shouldRender) {
    const rows = chunkStops(displayStops, layout.columns);
    target.innerHTML = `
      <svg class="timeline__path" aria-hidden="true"></svg>
      ${rows.map((rowStops, rowIndex) => renderRow(rowStops, rowIndex, rowIndex * layout.columns, layout.columns)).join("")}
    `;
    state.layoutColumns = layout.columns;
    bindNodeInteractions();
  }

  return shouldRender;
}

function getActiveStopId() {
  return state.hoverStopId || state.focusStopId || null;
}

function applyActiveState() {
  const activeStopId = getActiveStopId();
  let activeRow = null;

  document.querySelectorAll("[data-stop-id]").forEach((node) => {
    const isActive = Boolean(activeStopId) && node.dataset.stopId === activeStopId;
    node.classList.toggle("is-active", isActive);
    if (isActive) {
      activeRow = node.closest(".snake-row");
    }
  });

  document.querySelectorAll(".snake-row").forEach((row) => {
    row.classList.toggle("is-active-row", row === activeRow);
  });
}

function bindNodeInteractions() {
  document.querySelectorAll("[data-stop-id]").forEach((node) => {
    const stopId = node.dataset.stopId;

    if (state.canHover) {
      node.addEventListener("mouseenter", () => {
        state.hoverStopId = stopId;
        applyActiveState();
      });

      node.addEventListener("mouseleave", () => {
        state.hoverStopId = null;
        applyActiveState();
      });
    }

    node.addEventListener("focusin", () => {
      state.focusStopId = stopId;
      applyActiveState();
    });

    node.addEventListener("focusout", (event) => {
      if (!node.contains(event.relatedTarget)) {
        state.focusStopId = null;
        applyActiveState();
      }
    });

    node.addEventListener("click", () => {
      const trigger = node.querySelector("[data-stop-trigger]");
      if (trigger) {
        trigger.focus();
      }
    });
  });
}

function bindViewportState() {
  const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
  hoverMedia.addEventListener("change", (event) => {
    state.canHover = event.matches;
    if (!event.matches) {
      state.hoverStopId = null;
    }
    applyActiveState();
  });
}

function fitHeroTitle() {
  const heroBody = document.querySelector(".hero__body");
  const heroTitle = document.querySelector(".hero__title");
  const lines = heroTitle ? [...heroTitle.querySelectorAll("[data-hero-fit]")] : [];

  if (!heroBody || !heroTitle || !lines.length) {
    return;
  }

  const availableWidth = Math.max(heroBody.clientWidth - 8, 320);
  const maxSize = Math.min(window.innerWidth * 0.08, 112);
  const minSize = 52;
  let fontSize = maxSize;

  heroTitle.style.setProperty("--hero-title-size", `${fontSize}px`);

  while (fontSize > minSize) {
    const overflows = lines.some((line) => line.scrollWidth > availableWidth);
    if (!overflows) {
      break;
    }

    fontSize -= 2;
    heroTitle.style.setProperty("--hero-title-size", `${fontSize}px`);
  }
}

function fitHeroLede() {
  const heroBody = document.querySelector(".hero__body");
  const heroLede = document.querySelector(".hero__lede");

  if (!heroBody || !heroLede) {
    return;
  }

  const availableWidth = Math.max(heroBody.clientWidth - 8, 220);
  const maxSize = Math.min(window.innerWidth * 0.013, 20.5);
  const minSize = 14;
  let fontSize = Math.max(maxSize, minSize);

  heroLede.style.setProperty("--hero-lede-size", `${fontSize}px`);

  while (fontSize > minSize && heroLede.scrollWidth > availableWidth) {
    fontSize -= 0.5;
    heroLede.style.setProperty("--hero-lede-size", `${fontSize}px`);
  }
}

function init() {
  renderHeroSummary();
  renderTimeline(true);
  bindViewportState();
  applyActiveState();
  fitHeroTitle();
  fitHeroLede();
  schedulePathSync();
}

init();

window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    renderTimeline();
    applyActiveState();
    fitHeroTitle();
    fitHeroLede();
    schedulePathSync();
  });
});

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    renderTimeline();
    applyActiveState();
    fitHeroTitle();
    fitHeroLede();
    schedulePathSync();
  });
}
