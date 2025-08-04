# 👨‍💻 Development Manager KPI Reference Guide

*Generated on: July 17, 2025 at 08:01 PM*

## 👨‍💻 Executive Summary

This document provides comprehensive details for **15 Key Performance Indicators (KPIs)** used to evaluate Development Manager performance for **Development Manager** role.

### 📈 Summary Statistics
- **Total KPIs:** 15
- **Total Weightage:** 111%
- **Automated KPIs:** 10 (66.7%)
- **Manual KPIs:** 5 (33.3%)

### 📊 Frequency Distribution
- **Annually:** 1 KPIs
- **Bi-Annually:** 1 KPIs
- **Monthly:** 9 KPIs
- **Project End:** 4 KPIs

### 💾 Data Sources
- **BI Dashboard:** 1 KPIs
- **HR Dashboard:** 1 KPIs
- **JIRA:** 5 KPIs
- **MS Teams:** 1 KPIs
- **Survey:** 1 KPIs
- **TFS:** 6 KPIs

### 📏 Measure Types
- **Count:** 3 KPIs
- **Percentage:** 12 KPIs

---

## 📋 Detailed KPI Specifications

### 👨‍💻 1. Technical Documentation Maintenance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 657 |
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | MS Teams |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Ensure all technical documents are updated and uploaded on TFS

**🧮 Formula:** `Review of documents uploaded`

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | Doc Maintenance |
| 🟢 4 | &lt;= (less than or equal to) | 95 | Doc Maintenance |
| 🟡 3 | &lt;= (less than or equal to) | 90 | Doc Maintenance |
| 🟠 2 | &lt;= (less than or equal to) | 85 | Doc Maintenance |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Doc Maintenance |

---

### 🤖 2. Unit Case Automation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 659 |
| **Weightage** | 7% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** To measure number of unit cases automated during unit testing

**🧮 Formula:** `% of Unit Cases Automated`

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | % of Automated Unit Test Cases |
| 🟢 4 | &lt;= (less than or equal to) | 95 | % of Automated Unit Test Cases |
| 🟡 3 | &lt;= (less than or equal to) | 90 | % of Automated Unit Test Cases |
| 🟠 2 | &lt;= (less than or equal to) | 85 | % of Automated Unit Test Cases |
| 🔴 1 | &lt;= (less than or equal to) | 80 | % of Automated Unit Test Cases |

---

### 👥 3. Employee Retention Rate

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 669 |
| **Weightage** | 10% |
| **Measure** | Count |
| **Data Source** | HR Dashboard |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Percentage of employees who stay over a given period

**🧮 Formula:** `Number of resources retained every year`

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 85 | Employee Retention Rate |
| 🟢 4 | &lt;= (less than or equal to) | 85 | Employee Retention Rate |
| 🟡 3 | &lt;= (less than or equal to) | 75 | Employee Retention Rate |
| 🟠 2 | &lt;= (less than or equal to) | 70 | Employee Retention Rate |
| 🔴 1 | &lt;= (less than or equal to) | 65 | Employee Retention Rate |

---

### 😊 4. Team satisfaction on the project delivered

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 670 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | Survey |
| **Frequency** | Bi-Annually |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Average Score in team survey

**🧮 Formula:** `Avg. Score provided by Team`

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 90 | Team Satisfaction Score |
| 🟢 4 | &lt;= (less than or equal to) | 90 | Team Satisfaction Score |
| 🟡 3 | &lt;= (less than or equal to) | 85 | Team Satisfaction Score |
| 🟠 2 | &lt;= (less than or equal to) | 80 | Team Satisfaction Score |
| 🔴 1 | &lt;= (less than or equal to) | 75 | Team Satisfaction Score |

---

### 🐛 5. Bug Rate per resource

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 667 |
| **Weightage** | 10% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Track the total number of Jira issues reported against Development Manager’s projects with Nature Bug.

**🧮 Formula:** `Issue Count = Total Number of Issues Reported with Nature Bug`

**📐 Calculation Details:**

**Purpose:** Track the total number of Jira issues reported against Development Manager’s projects with Nature Bug.<br /> <br />**Formula:** `Issue Count = Total Number of Issues Reported with Nature Bug`<br /> <br />**Data Sources:** Jira (“POL” project); Project → Development Manager mapping<br /> <br />**Calculation Steps:** 1. Query Jira’s “POL” project for all issues with Nature Bug in the reporting period;<br /> 2. Group results by project (Development Manager);<br /> 3. Count issues per project.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Bugs |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Bugs |
| 🔴 1 | &gt; (greater than) | 8 | Number of Bugs |

---

### 📈 6. SLA of Development

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 660 |
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure SLA of development is met for production issues. Applies to all S3 & S4 tickets in all your production clients.

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to your department that meet the defined SLA for Severity 3 and Severity 4 incidents.<br /> <br />**Severity Levels:** **S3** (Level 3 – Normal), **S4** (Level 4 – General)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S3, S4); Assignment (Department, Development Manager); Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Identify Scope:** retrieve all client organizations in production and their DMs.<br /> 2.<br />**Filter Tickets:** select Level 3 & 4 tickets assigned in the period.<br /> 3.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 4.<br />**Compute Rate:** apply the formula.<br /> 5.<br />**Apply Weighting (if applicable):** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | % of Tickets Within SLA |
| 🟢 4 | &lt;= (less than or equal to) | 95 | % of Tickets Within SLA |
| 🟡 3 | &lt;= (less than or equal to) | 90 | % of Tickets Within SLA |
| 🟠 2 | &lt;= (less than or equal to) | 85 | % of Tickets Within SLA |
| 🔴 1 | &lt;= (less than or equal to) | 80 | % of Tickets Within SLA |

---

### 🐛 7. Critical Bug Rate

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 668 |
| **Weightage** | 10% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure if the delivered feature is in functional state. Total Number of Issues reported with Priority High in Jira POL of your projects.

**🧮 Formula:** `Critical Bug Rate = Total Number of Critical Issues Reported`

**📐 Calculation Details:**

**Purpose:** Measure the total number of high-priority (“critical”) issues reported in each Development Manager’s projects.<br /> <br />**Definition:** Critical Bugs = all Jira issues with Priority = High .<br /> <br />**Formula:** `Critical Bug Rate = Total Number of Critical Issues Reported`<br /> <br />**Data Sources:** Jira (“POL” project); all issue types; Priority field = High; Project → Development Manager mapping<br /> <br />**Calculation Steps:** 1. Query Jira’s “POL” project for issues where Priority = Critical (P1) in the reporting period;<br /> 2. Group results by project (and DM);<br /> 3. Count critical issues per project.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 0 | Number of Critical Bugs |
| 🟢 4 | equals | 1 | Number of Critical Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 3 | Number of Critical Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 5 | Number of Critical Bugs |
| 🔴 1 | &gt; (greater than) | 5 | Number of Critical Bugs |

---

### 📊 8. Effort Variance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 656 |
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Difference between the budgeted and actual efforts

**🧮 Formula:** `Budget Variance (%) = (Actual Effort – Budgeted Effort) / Budgeted Effort × 100`

**📐 Calculation Details:**

**Purpose:** Quantify the variance between planned (budgeted) and actual effort across all Development Manager (DM) projects.<br /> <br />**Formula:** `Budget Variance (%) = (Actual Effort – Budgeted Effort) / Budgeted Effort × 100`<br /> <br />**Data Sources:** EPM SharePoint “DMs Project” list; Planned Efforts (Budgeted Effort); Completed Work Efforts (Actual Effort)<br /> <br />**Calculation Steps:** 1. Retrieve all “DMs Project” entries from SharePoint;<br /> 2. Pull Planned Efforts and Completed Work Efforts for each project;<br /> 3. Compute variance percentage using the formula;<br /> 4.<br />**Aggregate:** sum individual variances and calculate their average;<br /> 5. Multiply average variance by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 10 | Effort Variance |
| 🟢 4 | &lt;= (less than or equal to) | 15 | Effort Variance |
| 🟡 3 | &lt;= (less than or equal to) | 20 | Effort Variance |
| 🟠 2 | &lt;= (less than or equal to) | 30 | Effort Variance |
| 🔴 1 | &gt; (greater than) | 30 | Effort Variance |

---

### 👨‍💻 9. S1 & S2 SLA

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 661 |
| **Weightage** | 6% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure SLA of severity incidents, this applies to all S1 & S2 tickets in all your production clients..

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to your department that meet the defined SLA for Severity 1 and Severity 2 incidents.<br /> <br />**Severity Levels:** **S1** (Level 1 – Critical), **S2** (Level 2 – High)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S1, S2); Assignment (Department, Development Manager); Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Identify Scope:** retrieve all client organizations in production and their DMs.<br /> 2.<br />**Filter Tickets:** select Level 1 & 2 tickets assigned in the period.<br /> 3.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 4.<br />**Compute Rate:** apply the formula.<br /> 5.<br />**Apply Weighting (if applicable):** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 100 | % of Critical Dev Issues Within SLA |
| 🟢 4 | &gt;= (greater than or equal to) | 95 | % of Critical Dev Issues Within SLA |
| 🟡 3 | &gt;= (greater than or equal to) | 90 | % of Critical Dev Issues Within SLA |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | % of Critical Dev Issues Within SLA |
| 🔴 1 | &lt; (less than) | 80 | % of Critical Dev Issues Within SLA |

---

### 📈 10. On-Time Project Development Completion

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 662 |
| **Weightage** | 7% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Percentage of projects delivered on or before the deadline

**🧮 Formula:** `On-Time Completion Rate (%) = (Number of Projects Completed On Time or Customer-Delayed) / Total Number of Projects × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of projects that complete development on or before their baseline cutover date, while excluding customer-driven delays.<br /> <br />**Formula:** `On-Time Completion Rate (%) = (Number of Projects Completed On Time or Customer-Delayed) / Total Number of Projects × 100`<br /> <br />**Data Sources:** EPM SharePoint “Development Manager Projects” list; Baseline Cutover Date; Actual Cutover Date; Variance Reason<br /> <br />**Calculation Steps:** 1.<br />**Retrieve Projects:** pull all “Development Manager Projects” entries.<br /> 2.<br />**Compare Dates:** for each project, compare Actual Cutover Date against Baseline Cutover Date.<br /> 3.<br />**Classify Completion:** On Time (Actual ≤ Baseline); Customer-Delayed but Accepted (Actual &gt; Baseline and Variance Reason = “Customer”); Late (Actual &gt; Baseline and Variance Reason ≠ “Customer”).<br /> 4.<br />**Count Projects:** Numerator = projects On Time or Customer-Delayed but Accepted; Denominator = all projects.<br /> 5.<br />**Compute Rate:** apply the formula.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 85 | % of Projects Delivered On Time |
| 🟢 4 | &lt;= (less than or equal to) | 85 | % of Projects Delivered On Time |
| 🟡 3 | &lt;= (less than or equal to) | 75 | % of Projects Delivered On Time |
| 🟠 2 | &lt;= (less than or equal to) | 70 | % of Projects Delivered On Time |
| 🔴 1 | &lt;= (less than or equal to) | 65 | % of Projects Delivered On Time |

---

### 👨‍💻 11. Production Patch Revert / Resubmission

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 664 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Annually |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure number of patches that are either reverted or a subsequent patch has to be resubmitted

**🧮 Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the proportion of production patches that are reverted or require a subsequent resubmission.<br /> <br />**Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`<br /> <br />**Data Sources:** Jira; Level 0 Sub-status; Status change history<br /> <br />**Definition of Terms:** Total Patches Sent = issues with Level 0 Sub-status = “Patch Dispatched to client” or “Awaiting Client Response”; Impacted Patches = those sent patches whose status changed from “Level 0 – Client End” back to “Level 2 – Support Engineer” while still in a sent sub-status.<br /> <br />**Calculation Steps:** 1. Query Jira for “sent” patches;<br /> 2. Count these as Total Patches Sent;<br /> 3. Identify reverts via status history and count as Impacted Patches;<br /> 4. Compute rate using the formula;<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | No. of Patch Revert |
| 🟢 4 | &lt;= (less than or equal to) | 4 | No. of Patch Revert |
| 🟡 3 | &lt;= (less than or equal to) | 6 | No. of Patch Revert |
| 🟠 2 | &lt;= (less than or equal to) | 8 | No. of Patch Revert |
| 🔴 1 | &gt; (greater than) | 8 | No. of Patch Revert |

---

### ✅ 12. Scope completion rate

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 658 |
| **Weightage** | 6% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** The scope completion rate covers the percentage of tasks completed in a sprint

**🧮 Formula:** `(Tasks Completed / Tasks Created) × 100`

**📐 Calculation Details:**

**Purpose:** % of tasks completed in a sprint.<br />**Formula:** (Tasks Completed / Tasks Created) × 100<br />**Data Source:** TFS project (monthly), Creation & Completion dates.<br />**Steps:**<br />1. Filter tasks created this month.<br />2. Count created vs. completed in month.<br />3. Apply formula.<br />4. Multiply by KPI weight.

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | Completion Rate |
| 🟢 4 | &lt;= (less than or equal to) | 95 | Completion Rate |
| 🟡 3 | &lt;= (less than or equal to) | 90 | Completion Rate |
| 🟠 2 | &lt;= (less than or equal to) | 85 | Completion Rate |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Completion Rate |

---

### 👨‍💻 13. Task Management on TFS

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 665 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Ensure all tasks are managed on TFS

**🧮 Formula:** `Utilization Rate (%) = (Total Estimated Task Effort / Resource Capacity) × 100`

**📐 Calculation Details:**

**Purpose:** Ensure all work is tracked in TFS by comparing each resource’s assigned task effort against their available capacity.<br /> <br />**Formula:** `Utilization Rate (%) = (Total Estimated Task Effort / Resource Capacity) × 100`<br /> <br />**Data Sources:** Power BI Compliance Dashboard; Resource Capacity (available hours); TFS Project; Work Item Type = Task; Assigned Resource; Original Estimate (hours)<br /> <br />**Calculation Steps:** 1. Retrieve capacity from Power BI dashboard;<br /> 2. Query TFS for all tasks assigned in the period;<br /> 3. Sum Original Estimate to get Total Estimated Task Effort;<br /> 4. Divide by Resource Capacity × 100;<br /> 5. Interpret near-100% as optimal, &gt;100% over-allocated, &lt;100% under-utilized.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | TFS Task Coverage |
| 🟢 4 | &lt;= (less than or equal to) | 95 | TFS Task Coverage |
| 🟡 3 | &lt;= (less than or equal to) | 90 | TFS Task Coverage |
| 🟠 2 | &lt;= (less than or equal to) | 85 | TFS Task Coverage |
| 🔴 1 | &lt; (less than) | 80 | TFS Task Coverage |

---

### 👨‍💻 14. WBS

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 666 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** No Task should be more than 1 day

**🧮 Formula:** `Non-Compliance Rate (%) = (Number of Tasks with Estimate > 8h / Total Number of Tasks Created) × 100`

**📐 Calculation Details:**

**Purpose:** Identify the proportion of newly created WBS tasks whose original estimate exceeds one business day (8 hours).<br /> <br />**Formula:** `Non-Compliance Rate (%) = (Number of Tasks with Estimate > 8h / Total Number of Tasks Created) × 100`<br /> <br />**Data Sources:** TFS Project; Work Item Type = Task; Created Date (current month); Original Estimate (in hours)<br /> <br />**Calculation Steps:** 1. Query TFS for all Task work items created this month;<br /> 2. Read each task’s Original Estimate;<br /> 3. Count tasks where Estimate &gt; 8h;<br /> 4. Count total tasks;<br /> 5. Apply formula to compute the rate.<br />

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 95 | % of Tasks Created ≤ 1 Day |
| 🟢 4 | &lt;= (less than or equal to) | 95 | % of Tasks Created ≤ 1 Day |
| 🟡 3 | &lt;= (less than or equal to) | 90 | % of Tasks Created ≤ 1 Day |
| 🟠 2 | &lt;= (less than or equal to) | 85 | % of Tasks Created ≤ 1 Day |
| 🔴 1 | &lt;= (less than or equal to) | 80 | % of Tasks Created ≤ 1 Day |

---

### 📈 15. On-Time CRF Development Completion

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 663 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Percentage of CRF delivered on or before the deadline

**🧮 Formula:** `% of CRF development completed on time`

**👥 Applicability:**

- **Designation:** Development Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt; (greater than) | 85 | % of CRFs Delivered On Time |
| 🟢 4 | &lt;= (less than or equal to) | 85 | % of CRFs Delivered On Time |
| 🟡 3 | &lt;= (less than or equal to) | 75 | % of CRFs Delivered On Time |
| 🟠 2 | &lt;= (less than or equal to) | 70 | % of CRFs Delivered On Time |
| 🔴 1 | &lt;= (less than or equal to) | 65 | % of CRFs Delivered On Time |

---


## 📞 Support & Contact

For questions about this Development Manager KPI documentation, please contact the Performance Management team.

---
*This document was automatically generated from Development Manager KPI specifications on July 17, 2025*
