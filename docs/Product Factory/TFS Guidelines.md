# 🚀 Developer KPI Automation Rules  

## 📋 Workflow and Data Rules

| Ref | Guideline / Rule | Notes & Actions |
|-----|------------------|-----------------|
| **1** | **⚙️ Agile Board Configuration** – Every team board must use Agile workflow so features are tagged **Large / Medium / Small** By default all are considered **MEDIUM**| i. Decide a default project size for other projects. ii. Need to decide a field for feature size in tfs. |
| **2** | **🔀 Pull-Request Discipline** – Each developer must raise **exactly one PR per task**. | PR title must reference the task key. |
| **3** | **🐛 Bug Traceability** – Link every discovered bug to the **specific task** where it was found. | Ensures defect-origin analytics. |
| **4** | **❗ Missing-PR Scenario** – If a task closes without a PR  | HODs to document standard process (TBD) to capture and report this exception |
| **5** | **📊 Mandatory KPI Sources** – **Both** Jira and TFS KPI fields are required for every developer. | Missing data affects the KPI score adversely. |
| **6** | **🏖️ Leave / Holiday Handling** – Public holidays and approved leave are not considered when calculating completion rate. | HODs to update how to handle this. |
| **7** | **⏸️ Task On-Hold Tracking** – When work stops or a resource is reassigned, set status to **On Hold** and record **hold-start / hold-end** dates; this time must be excluded from cycle-time KPIs. | HODs to finalize the process definition. |
| **8** | **👥 Multiple L3 Assignees** – If a Jira issue has multiple L3 assignees, the system must credit **all** assignees, not just the most recent. | Enhancement required in next update. |
| **9** | **⏱️ Original Estimate Required** – Enter an **Original Estimate** when the task is created; blank estimates are invalid. | — |
| **10** | **🔄 Work item assignee change event handling**| HODs to update about the process|
| **11** | **📝 Jira POL was added later need after the development** | POL Will be rolled out in next update|

---

## 📈 KPI Scoring Logic (per sprint)

| Condition | KPI Affected | Score |
|-----------|--------------|-------|
| Task has **no bugs** 🎯 | Bug-count KPI | **5** ⭐ |
| Task has **no PR** ❌ | Comments-on-PR KPI | **0** 💔 |
| PR exists **without comments** ✅ | Comments-on-PR KPI | **5** ⭐ |
| **No TFS tasks** for a developer 🚫 | All **TFS KPIs** | **0** 💔 |
| **No Jira tasks** for a developer 🚫 | All **Jira KPIs** | **0** 💔 |

> 📌 All scores are on a **0 – 5** scale where **5 = maximum** ⭐ and **0 = minimum** 💔.
