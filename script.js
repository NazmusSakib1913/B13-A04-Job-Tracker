
const jobsData = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "not-applied"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "not-applied"
    },
    {
        id: 3,
        companyName: "DataSync Technologies",
        position: "Backend Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$140,000 - $180,000",
        description: "Develop and maintain scalable API services powering real-time data synchronization across distributed systems.",
        status: "not-applied"
    },
    {
        id: 4,
        companyName: "CloudNest Solutions",
        position: "DevOps Engineer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$125,000 - $160,000",
        description: "Manage cloud infrastructure on AWS and Azure. Automate CI/CD pipelines and ensure 99.9% uptime for production services.",
        status: "not-applied"
    },
    {
        id: 5,
        companyName: "PixelCraft Studios",
        position: "UI/UX Designer",
        location: "New York, NY",
        type: "Contract",
        salary: "$90,000 - $130,000",
        description: "Design intuitive user interfaces for mobile and web applications. Conduct user research and translate findings into wireframes.",
        status: "not-applied"
    },
    {
        id: 6,
        companyName: "GreenLeaf Analytics",
        position: "Data Scientist",
        location: "Chicago, IL",
        type: "Full-time",
        salary: "$135,000 - $170,000",
        description: "Analyze large-scale environmental datasets to derive actionable insights. Build predictive models using Python and TensorFlow.",
        status: "not-applied"
    },
    {
        id: 7,
        companyName: "SecureNet Inc.",
        position: "Cybersecurity Analyst",
        location: "Washington, D.C.",
        type: "Full-time",
        salary: "$115,000 - $155,000",
        description: "Monitor network traffic for threats, conduct vulnerability assessments, and implement security protocols across the organization.",
        status: "not-applied"
    },
    {
        id: 8,
        companyName: "BrightPath Education",
        position: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$110,000 - $145,000",
        description: "Build and maintain the learning management platform used by thousands of students. Work with React, Node.js, and PostgreSQL.",
        status: "not-applied"
    }
];

let jobs = JSON.parse(JSON.stringify(jobsData));
let activeTab = "all";

const jobsContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");
const totalCountEl = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const jobsCountEl = document.getElementById("jobsCount");
const tabButtons = document.querySelectorAll(".tab");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");


function createJobCardHTML(job) {
    const statusLabel = job.status === "not-applied"
        ? "Not Applied"
        : job.status === "interview"
            ? "Interview"
            : "Rejected";

    const statusClass = job.status;

    const isInterviewSelected = job.status === "interview";
    const isRejectedSelected = job.status === "rejected";

    return `
        <div class="job-card" data-id="${job.id}" id="jobCard-${job.id}">
            <div class="job-card-header">
                <div>
                    <div class="company-name">${job.companyName}</div>
                    <div class="position">${job.position}</div>
                </div>
                <button class="btn-delete" onclick="deleteJob(${job.id})" aria-label="Delete job" title="Delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>

            <div class="job-meta">
                <span>${job.location}</span>
                <span>${job.type}</span>
                <span>${job.salary}</span>
            </div>

            <div class="status-badge ${statusClass}">${statusLabel}</div>

            <p class="job-description">${job.description}</p>

            <div class="job-actions">
                <button class="btn btn-interview ${isInterviewSelected ? 'selected' : ''}" onclick="setStatus(${job.id}, 'interview')" id="btnInterview-${job.id}">
                    Interview
                </button>
                <button class="btn btn-rejected ${isRejectedSelected ? 'selected' : ''}" onclick="setStatus(${job.id}, 'rejected')" id="btnRejected-${job.id}">
                    Rejected
                </button>
            </div>
        </div>
    `;
}



function renderJobs() {
    let filteredJobs;

    if (activeTab === "all") {
        filteredJobs = jobs;
    } else if (activeTab === "interview") {
        filteredJobs = jobs.filter(j => j.status === "interview");
    } else {
        filteredJobs = jobs.filter(j => j.status === "rejected");
    }

    jobsCountEl.textContent = `${filteredJobs.length} job${filteredJobs.length !== 1 ? 's' : ''}`;

    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = "";
        jobsContainer.classList.add("hidden");
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
        jobsContainer.classList.remove("hidden");
        jobsContainer.innerHTML = filteredJobs.map(createJobCardHTML).join("");
    }

    updateDashboard();
}