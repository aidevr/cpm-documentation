# 📊 Development Manager KPI Reference Guide

*Generated on: July 09, 2025 at 11:55 AM*

## 🎯 Executive Summary

This document provides comprehensive details for **15 Key Performance Indicators (KPIs)** used to evaluate Development Manager performance.

### 📈 Summary Statistics
- **Total KPIs:** 15
- **Total Weightage:** 111%
- **Automated KPIs:** 9 (60.0%)
- **Manual KPIs:** 6 (40.0%)

### 📊 Frequency Distribution
- **Annually:** 3 KPIs
- **Bi-Annually:** 1 KPIs
- **Monthly:** 9 KPIs
- **Project-End:** 2 KPIs

### 💾 Data Sources
- **BI Dashboard:** 3 KPIs
- **HR Dashboard:** 1 KPIs
- **JIRA:** 5 KPIs
- **MS Teams:** 1 KPIs
- **Survey:** 1 KPIs
- **TFS:** 4 KPIs

---

## 📋 Detailed KPI Specifications

### 📊 1. Effort Variance

| Attribute | Value |
|-----------|-------|
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Project-End |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Difference between the budgeted and actual efforts

**🧮 Formula:** `% {(Actual Efforts - Budget Efforts) / Budget Efforts}`

**📐 Calculation Details:**

**Purpose:** Quantify the variance between planned (budgeted) and actual effort across all Development Manager (DM) projects.<br /> <br />**Formula:** `Budget Variance (%) = (Actual Effort – Budgeted Effort) / Budgeted Effort × 100`<br /> <br />**Data Sources:** EPM SharePoint “DMs Project” list; Planned Efforts (Budgeted Effort); Completed Work Efforts (Actual Effort)<br /> <br />**Calculation Steps:** <br /> 1. Retrieve all “DMs Project” entries from SharePoint;<br /> 2. Pull Planned Efforts and Completed Work Efforts for each project;<br /> 3. Compute variance percentage using the formula;<br /> 4. Aggregate: sum individual variances and calculate their average;<br /> 5. Multiply average variance by the KPI’s weight.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 10 | Effort Variance |
| 🟢 4 | &lt;= (less than or equal to) | 15 | Effort Variance |
| 🟡 3 | &lt;= (less than or equal to) | 20 | Effort Variance |
| 🟠 2 | &lt;= (less than or equal to) | 30 | Effort Variance |
| 🔴 1 | &gt; (greater than) | 30 | Effort Variance |

---

### 📝 2. Technical Documentation Maintenance

| Attribute | Value |
|-----------|-------|
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | MS Teams |
| **Frequency** | Project-End |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Ensure all technical documents are updated and uploaded on TFS

**🧮 Formula:** `Review of documents uploaded`

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | Doc Maintenance |
| 🟢 4 | &lt;= (less than or equal to) | 95 | Doc Maintenance |
| 🟡 3 | &lt;= (less than or equal to) | 90 | Doc Maintenance |
| 🟠 2 | &lt;= (less than or equal to) | 85 | Doc Maintenance |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Doc Maintenance |

---

### ✅ 3. Scope completion rate

| Attribute | Value |
|-----------|-------|
| **Weightage** | 6% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** The scope completion rate covers the percentage of tickets completed in a sprint

**🧮 Formula:** `% Tasks Completed`

**📐 Calculation Details:**

**Purpose:** % of tasks completed in a sprint.<br />**Formula:** `(Tasks Completed / Tasks Created) × 100`<br />**Data Source:** TFS project (monthly), Creation & Completion dates.<br />**Steps:**<br />1. Filter tasks created this month.<br />2. Count created vs. completed in month.<br />3. Apply formula.<br />4. Multiply by KPI weight.

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | Completion Rate |
| 🟢 4 | &lt;= (less than or equal to) | 95 | Completion Rate |
| 🟡 3 | &lt;= (less than or equal to) | 90 | Completion Rate |
| 🟠 2 | &lt;= (less than or equal to) | 85 | Completion Rate |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Completion Rate |

---

### 🤖 4. Unit Case Automation

| Attribute | Value |
|-----------|-------|
| **Weightage** | 7% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** To measure number of unit cases automated during unit testing

**🧮 Formula:** `% of Unit Cases Automated`

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | % of Automated Unit Test Cases |
| 🟢 4 | &lt;= (less than or equal to) | 95 | % of Automated Unit Test Cases |
| 🟡 3 | &lt;= (less than or equal to) | 90 | % of Automated Unit Test Cases |
| 🟠 2 | &lt;= (less than or equal to) | 85 | % of Automated Unit Test Cases |
| 🔴 1 | &lt;= (less than or equal to) | 80 | % of Automated Unit Test Cases |

---

### ⏰ 5. SLA of Development

| Attribute | Value |
|-----------|-------|
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure SLA of development is met for production issues

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to your department that meet the defined SLA for Severity 3 and Severity 4 incidents.<br /> <br />**Severity Levels:** **S3** (Level 3 – Normal), **S4** (Level 4 – General)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S3, S4); Assignment (Department, Development Manager); Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** <br />1. **Identify Scope:** retrieve all client organizations in production and their DMs.<br /> 2.**Filter Tickets:** select Level 3 & 4 tickets assigned in the period.<br /> 3.**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 4.**Compute Rate:** apply the formula.<br /> 5. **Apply Weighting:** multiply the result by the KPI’s weight.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | % of Dev Issues Within SLA |
| 🟢 4 | &lt;= (less than or equal to) | 95 | % of Dev Issues Within SLA |
| 🟡 3 | &lt;= (less than or equal to) | 90 | % of Dev Issues Within SLA |
| 🟠 2 | &lt;= (less than or equal to) | 85 | % of Dev Issues Within SLA |
| 🔴 1 | &lt;= (less than or equal to) | 80 | % of Dev Issues Within SLA |

---

### 🚨 6. S1 & S2 SLA

| Attribute | Value |
|-----------|-------|
| **Weightage** | 6% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure SLA of severity incidents in production

**🧮 Formula:** `SLA Achieved for severity incidents`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to your department that meet the defined SLA for Severity 1 and Severity 2 incidents.<br /> <br />**Severity Levels:** **S1** (Level 1 – Critical), **S2** (Level 2 – High)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S1, S2); Assignment (Department, Development Manager); Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1**Identify Scope:** retrieve all client organizations in production and their DMs.<br /> 2**Filter Tickets:** select Level 1 & 2 tickets assigned in the period.<br /> 3**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 4**Compute Rate:** apply the formula.<br /> 5**Apply Weighting (if applicable):** multiply the result by the KPI’s weight.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 100 | % of Critical Dev Issues Within SLA |
| 🟢 4 | &gt;= (greater than or equal to) | 95 | % of Critical Dev Issues Within SLA |
| 🟡 3 | &gt;= (greater than or equal to) | 90 | % of Critical Dev Issues Within SLA |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | % of Critical Dev Issues Within SLA |
| 🔴 1 | &lt; (less than) | 80 | % of Critical Dev Issues Within SLA |

---

### 🎯 7. On-Time Project Development Completion

| Attribute | Value |
|-----------|-------|
| **Weightage** | 7% |
| **Measure** | Percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Annually |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Percentage of projects delivered on or before the deadline

**🧮 Formula:** `% of projects development completed on time`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of projects that complete development on or before their baseline cutover date, while excluding customer-driven delays.<br /> <br />**Formula:** `On-Time Completion Rate (%) = (Number of Projects Completed On Time or Customer-Delayed) / Total Number of Projects × 100`<br /> <br />**Data Sources:** EPM SharePoint “Development Manager Projects” list; Baseline Cutover Date; Actual Cutover Date; Variance Reason<br /> <br />**Calculation Steps:** 1**Retrieve Projects:** pull all “Development Manager Projects” entries.<br /> 2**Compare Dates:** for each project, compare Actual Cutover Date against Baseline Cutover Date.<br /> 3**Classify Completion:** On Time (Actual ≤ Baseline); Customer-Delayed but Accepted (Actual &gt; Baseline and Variance Reason = “Customer”); Late (Actual &gt; Baseline and Variance Reason ≠ “Customer”).<br /> 4**Count Projects:** Numerator = projects On Time or Customer-Delayed but Accepted; Denominator = all projects.<br /> 5**Compute Rate:** apply the formula.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 85 | % of Projects Delivered On Time |
| 🟢 4 | &lt;= (less than or equal to) | 85 | % of Projects Delivered On Time |
| 🟡 3 | &lt;= (less than or equal to) | 75 | % of Projects Delivered On Time |
| 🟠 2 | &lt;= (less than or equal to) | 70 | % of Projects Delivered On Time |
| 🔴 1 | &lt;= (less than or equal to) | 65 | % of Projects Delivered On Time |

---

### 📋 8. On-Time CRF Development Completion

| Attribute | Value |
|-----------|-------|
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Annually |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Percentage of CRF delivered on or before the deadline

**🧮 Formula:** `% of CRF development completed on time`

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 85 | % of CRFs Delivered On Time |
| 🟢 4 | &lt;= (less than or equal to) | 85 | % of CRFs Delivered On Time |
| 🟡 3 | &lt;= (less than or equal to) | 75 | % of CRFs Delivered On Time |
| 🟠 2 | &lt;= (less than or equal to) | 70 | % of CRFs Delivered On Time |
| 🔴 1 | &lt;= (less than or equal to) | 65 | % of CRFs Delivered On Time |

---

### 🔧 9. Production Patch Revert / Resubmission

| Attribute | Value |
|-----------|-------|
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Annually |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure number of patches that are either reverted or a subsequent patch has to be resubmitted

**🧮 Formula:** `Number of Impacted Patches / Total number of Patches sent`

**📐 Calculation Details:**

**Purpose:** Measure the proportion of production patches that are reverted or require a subsequent resubmission.<br /> <br />**Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`<br /> <br />**Data Sources:** Jira; Level 0 Sub-status; Status change history<br /> <br />**Definition of Terms:** Total Patches Sent = issues with Level 0 Sub-status = “Patch Dispatched to client” or “Awaiting Client Response”; Impacted Patches = those sent patches whose status changed from “Level 0 – Client End” back to “Level 2 – Support Engineer” while still in a sent sub-status.<br /> <br />**Calculation Steps:** 1. Query Jira for “sent” patches;<br /> 2. Count these as Total Patches Sent;<br /> 3. Identify reverts via status history and count as Impacted Patches;<br /> 4. Compute rate using the formula;<br /> 5. Multiply result by the KPI’s assigned weight.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | No. of Patch Revert |
| 🟢 4 | &lt;= (less than or equal to) | 4 | No. of Patch Revert |
| 🟡 3 | &lt;= (less than or equal to) | 6 | No. of Patch Revert |
| 🟠 2 | &lt;= (less than or equal to) | 8 | No. of Patch Revert |
| 🔴 1 | &gt; (greater than) | 8 | No. of Patch Revert |

---

### 📋 10. Task Management on TFS

| Attribute | Value |
|-----------|-------|
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Ensure all tasks are managed on TFS

**🧮 Formula:** `% of working days for which the work is assigned on TFS`

**📐 Calculation Details:**

**Purpose:** Ensure all work is tracked in TFS by comparing each resource’s assigned task effort against their available capacity.<br /> <br />**Formula:** `Utilization Rate (%) = (Total Estimated Task Effort / Resource Capacity) × 100`<br /> <br />**Data Sources:** Power BI Compliance Dashboard; Resource Capacity (available hours); TFS Project; Work Item Type = Task; Assigned Resource; Original Estimate (hours)<br /> <br />**Calculation Steps:** 1. Retrieve capacity from Power BI dashboard;<br /> 2. Query TFS for all tasks assigned in the period;<br /> 3. Sum Original Estimate to get Total Estimated Task Effort;<br /> 4. Divide by Resource Capacity × 100;<br /> 5. Interpret near-100% as optimal, &gt;100% over-allocated, &lt;100% under-utilized.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | TFS Task Coverage |
| 🟢 4 | &lt;= (less than or equal to) | 95 | TFS Task Coverage |
| 🟡 3 | &lt;= (less than or equal to) | 90 | TFS Task Coverage |
| 🟠 2 | &lt;= (less than or equal to) | 85 | TFS Task Coverage |
| 🔴 1 | &lt; (less than) | 80 | TFS Task Coverage |

---

### ⏱️ 11. WBS

| Attribute | Value |
|-----------|-------|
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** No Task should be more than 1 day

**🧮 Formula:** `% of Tasks that are for 1 day or less`

**📐 Calculation Details:**

**Purpose:** Identify the proportion of newly created WBS tasks whose original estimate exceeds one business day (8 hours).<br /> <br />**Formula:** `Non-Compliance Rate (%) = (Number of Tasks with Estimate > 8h / Total Number of Tasks Created) × 100`<br /> <br />**Data Sources:** TFS Project; Work Item Type = Task; Created Date (current month); Original Estimate (in hours)<br /> <br />**Calculation Steps:** 1. Query TFS for all Task work items created this month;<br /> 2. Read each task’s Original Estimate;<br /> 3. Count tasks where Estimate &gt; 8h;<br /> 4. Count total tasks;<br /> 5. Apply formula to compute the rate.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | % of Tasks with 1-Day Duration |
| 🟢 4 | &lt;= (less than or equal to) | 95 | % of Tasks with 1-Day Duration |
| 🟡 3 | &lt;= (less than or equal to) | 90 | % of Tasks with 1-Day Duration |
| 🟠 2 | &lt;= (less than or equal to) | 85 | % of Tasks with 1-Day Duration |
| 🔴 1 | &lt;= (less than or equal to) | 80 | % of Tasks with 1-Day Duration |

---

### 🐛 12. Bug Rate per resource

| Attribute | Value |
|-----------|-------|
| **Weightage** | 10% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Bug rate tracks how often you find bugs during testing

**🧮 Formula:** `Number of Bugs per Sprint`

**📐 Calculation Details:**

**Purpose:** Track the total number of Jira issues reported against Development Manager’s projects with Nature Bug.<br /> <br />**Formula:** `Issue Count = Total Number of Issues Reported with Nature Bug`<br /> <br />**Data Sources:** Jira (“POL” project); Project → Development Manager mapping<br /> <br />**Calculation Steps:** 1. Query Jira’s “POL” project for all issues with Nature Bug in the reporting period;<br /> 2. Group results by project (Development Manager);<br /> 3. Count issues per project.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Bugs |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Bugs |
| 🔴 1 | &gt; (greater than) | 8 | Number of Bugs |

---

### 🐛 13. Critical Bug Rate

| Attribute | Value |
|-----------|-------|
| **Weightage** | 10% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure if the delivered feature is in functional state

**🧮 Formula:** `Number of Critical & High Defects`

**📐 Calculation Details:**

**Purpose:** Measure the total number of high-priority (“critical”) issues reported in each Development Manager’s projects.<br /> <br />**Definition:** Critical Bugs = all Jira issues with Priority = Critical.<br /> <br />**Formula:** `Critical Bug Rate = Total Number of Critical Issues Reported`<br /> <br />**Data Sources:** Jira (“POL” project); all issue types; Priority field = Critical; Project → Development Manager mapping<br /> <br />**Calculation Steps:** 1. Query Jira’s “POL” project for issues where Priority = Critical in the reporting period;<br /> 2. Group results by project (and DM);<br /> 3. Count critical issues per project.<br />

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 0 | Number of Critical Bugs |
| 🟢 4 | equals | 1 | Number of Critical Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 3 | Number of Critical Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 5 | Number of Critical Bugs |
| 🔴 1 | &gt; (greater than) | 5 | Number of Critical Bugs |

---

### 👥 14. Employee Retention Rate

| Attribute | Value |
|-----------|-------|
| **Weightage** | 10% |
| **Measure** | Count |
| **Data Source** | HR Dashboard |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Percentage of employees who stay over a given period

**🧮 Formula:** `Number of resources retained every year`

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 85 | Employee Retention Rate |
| 🟢 4 | &lt;= (less than or equal to) | 85 | Employee Retention Rate |
| 🟡 3 | &lt;= (less than or equal to) | 75 | Employee Retention Rate |
| 🟠 2 | &lt;= (less than or equal to) | 70 | Employee Retention Rate |
| 🔴 1 | &lt;= (less than or equal to) | 65 | Employee Retention Rate |

---

### 😊 15. Team satisfaction on the project delivered

| Attribute | Value |
|-----------|-------|
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | Survey |
| **Frequency** | Bi-Annually |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Average Score in team survey

**🧮 Formula:** `Avg. Score provided by Team`

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 90 | Team Satisfaction Score |
| 🟢 4 | &lt;= (less than or equal to) | 90 | Team Satisfaction Score |
| 🟡 3 | &lt;= (less than or equal to) | 85 | Team Satisfaction Score |
| 🟠 2 | &lt;= (less than or equal to) | 80 | Team Satisfaction Score |
| 🔴 1 | &lt;= (less than or equal to) | 75 | Team Satisfaction Score |

---


*This document was automatically generated from KPI specifications on July 09, 2025*
