# 🎯 CSM KPI Reference Guide

*Generated on: July 15, 2025 at 02:57 PM*

## 🎯 Executive Summary

This document provides comprehensive details for **24 Key Performance Indicators (KPIs)** used to evaluate CSM performance for **CSM** role.

### 📈 Summary Statistics
- **Total KPIs:** 24
- **Total Weightage:** 100%
- **Automated KPIs:** 12 (50.0%)
- **Manual KPIs:** 12 (50.0%)

### 📊 Frequency Distribution
- **Annually:** 2 KPIs
- **Monthly:** 8 KPIs
- **Per Project:** 1 KPIs
- **Per Sprint:** 2 KPIs
- **Project / Crf End:** 2 KPIs
- **Project End:** 3 KPIs
- **Project Milestone:** 2 KPIs
- **Quarterly:** 2 KPIs
- **Sit End:** 2 KPIs

### 💾 Data Sources
- **BI dashboard:** 1 KPIs
- **EPM:** 3 KPIs
- **JIRA:** 9 KPIs
- **Survey:** 2 KPIs
- **TFS:** 9 KPIs

### 📏 Measure Types
- **Count:** 8 KPIs
- **Percentage:** 16 KPIs

---

## 📋 Detailed KPI Specifications

### 💰 1. Average Project, CRF & Dedicated Model Profitability

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 794 |
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | BI dashboard |
| **Frequency** | Quarterly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Profitability of Project, CRF & Dedicated

**🧮 Formula:** `Project Profitability (%) = (Cost of Project / Revenue of Project) × 100`

**📐 Calculation Details:**

**KPI:** Average Project Profitability (%)<br />**Purpose:** Evaluate how cost-efficient projects are by comparing their cost to revenue, then averaging across all projects.<br />**Formula:** `Project Profitability (%) = (Cost of Project / Revenue of Project) × 100` and `Average Project Profitability (%) = (Sum of all Project Profitability %) / Number of Projects`<br />**Data Sources:** Power BI Dashboard (Project Cost); EPM SharePoint CSM Project” list (Project Revenue)<br />**Calculation Steps:** 1.<br />**Retrieve Projects:** pull all entries from the SharePoint list.<br />2.<br />**Extract Financials:** for each project, get Cost from the Power BI Dashboard and Revenue from SharePoint.<br />3.<br />**Compute Profitability per Project:** `Profitability (%) = (Cost / Revenue) × 100`.<br />4.<br />**Aggregate to Average:** sum all project profitability percentages and divide by total number of projects.<br />5.<br />**Apply Weighting:** multiply the average profitability by the KPI’s assigned weight to derive the weighted score.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 110 | Project Profitability |
| 🟢 4 | &gt;= (greater than or equal to) | 100 | Project Profitability |
| 🟡 3 | &gt;= (greater than or equal to) | 90 | Project Profitability |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Project Profitability |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Project Profitability |

---

### 🧪 2. Test Case Effectiveness

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 795 |
| **Weightage** | 2% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Project / Crf End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** the percentage of test cases that successfully identify defects. 

**🧮 Formula:** `# of Defects / # of Test Cases Executed`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 50 | Percentage of Effective Test Cases |
| 🟢 4 | &gt;= (greater than or equal to) | 40 | Percentage of Effective Test Cases |
| 🟡 3 | &gt;= (greater than or equal to) | 35 | Percentage of Effective Test Cases |
| 🟠 2 | &gt;= (greater than or equal to) | 30 | Percentage of Effective Test Cases |
| 🔴 1 | &lt;= (less than or equal to) | 30 | Percentage of Effective Test Cases |

---

### 🧪 3. Test Execution Time

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 796 |
| **Weightage** | 3% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Per Sprint |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Measures the time taken to manually execute a set of test cases.

**🧮 Formula:** `# of Test Cases Executed / Total Time Taken`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 25 | Avg Test Execution Time |
| 🟢 4 | &gt;= (greater than or equal to) | 20 | Avg Test Execution Time |
| 🟡 3 | &gt;= (greater than or equal to) | 15 | Avg Test Execution Time |
| 🟠 2 | &gt;= (greater than or equal to) | 10 | Avg Test Execution Time |
| 🔴 1 | &lt;= (less than or equal to) | 10 | Avg Test Execution Time |

---

### 🐛 4. Invalid Bugs Count

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 797 |
| **Weightage** | 3% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Per Sprint |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Number of invalid bugs reported

**🧮 Formula:** `Invalid Bug Count = Number of issues in CSM’s projects with Closing_Reason ∈ {"Reject","Not a Bug"}`

**📐 Calculation Details:**

**Purpose:** Count the number of bug reports in a CSM’s projects that were later rejected or marked as not a bug.<br /> <br />**Formula:** `Invalid Bug Count = Number of issues in CSM’s projects with Closing_Reason ∈ {"Reject","Not a Bug"}`<br /> <br />**Data Sources:** Jira “POL” project; CSM→Project mapping; Closing_Reason (Reject, Not a Bug); Close Timestamp<br /> <br />**Calculation Steps:** 1. Query Jira “POL” for issues in the CSM’s projects within the reporting period.<br /> 2. Filter to those with Closing_Reason = “Reject” or “Not a Bug.”<br /> 3. Count the total filtered issues.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 0 | Number of Invalid Bugs |
| 🟢 4 | &lt;= (less than or equal to) | 1 | Number of Invalid Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 4 | Number of Invalid Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 6 | Number of Invalid Bugs |
| 🔴 1 | &gt;= (greater than or equal to) | 6 | Number of Invalid Bugs |

---

### 👨‍💼 5. Production Patch Revert / Resubmission

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 798 |
| **Weightage** | 3% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Quarterly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure number of patches that are either reverted or a subsequent patch has to be resubmitted

**🧮 Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the proportion of production patches within a specific CSM’s projects that are reverted or require a subsequent resubmission.<br /> <br />**Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`<br /> <br />**Data Sources:** EPM SharePoint “Project→CSM” mapping; Jira “POL” project (Level 0 Sub-status; Status change history)<br /> <br />**Definition of Terms:** Total Patches Sent = issues in CSM’s projects where Level 0 Sub-status = “Patch Dispatched to client” or “Awaiting Client Response”; Impacted Patches = from that set, those whose status moved from “Level 0 – Client End” back to “Level 2 – Support Engineer” while still in a sent sub-status.<br /> <br />**Calculation Steps:** 1. Fetch CSM’s projects via EPM; 2. Query Jira for sent patches in those projects and count as Total Patches Sent; 3. Identify reverts via status-change history and count as Impacted Patches; 4. Compute Patch Revert Rate using the formula.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 0 | Number of Patch Revert |
| 🟢 4 | equals | 1 | Number of Patch Revert |
| 🟡 3 | equals | 2 | Number of Patch Revert |
| 🟠 2 | equals | 3 | Number of Patch Revert |
| 🔴 1 | equals | 3 | Number of Patch Revert |

---

### 👨‍💼 6. Overall SLA - S3 & S4 

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 799 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Overall SLA of the tickets logged

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets in a CSM’s projects that meet the defined SLA for Severity 3 and Severity 4 incidents.<br /> <br />**Severity Levels:** **S3** (Level 3 – Normal), **S4** (Level 4 – General)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S3, S4); Project→CSM mapping; Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Identify Scope:** fetch the CSM’s projects and their tickets; 2.<br />**Filter Tickets:** select Level 3 & 4 tickets in those projects for the period; 3.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA; 4.<br />**Compute Rate:** apply the formula; 5.<br />**Apply Weighting (if applicable):** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of S3 & S4 Tickets Within SLA |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of S3 & S4 Tickets Within SLA |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of S3 & S4 Tickets Within SLA |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of S3 & S4 Tickets Within SLA |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Percentage of S3 & S4 Tickets Within SLA |

---

### 👨‍💼 7. L2 Reassignment

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 800 |
| **Weightage** | 2% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Number of reassigned tickets once the issue is identified as a bug and assigned to developer

**🧮 Formula:** `L2 Reassignment Count = Sum of events per ticket where Assignment Level = 2 and the new assignee role repeats a prior Level-2 role in that ticket’s history`

**📐 Calculation Details:**

**Purpose:** Measure how often Level-2 tickets in a CSM’s projects are reassigned back to a previously used Level-2 role before completion.<br /> <br />**Formula:** `L2 Reassignment Count = Sum of events per ticket where Assignment Level = 2 and the new assignee role repeats a prior Level-2 role in that ticket’s history`<br /> <br />**Data Sources:** EPM SharePoint “Project Managers Project” list (Project→CSM mapping); Jira “POL” project (Assignment Level; Assignment History; Status History)<br /> <br />**Calculation Steps:** 1. Fetch CSM’s projects from SharePoint; 2. Identify completed tickets with Assignment Level=2; 3. Retrieve each ticket’s assignment-change history; 4. Track the sequence of Level-2 roles (Support, Network, Database); 5. Count an event each time a role repeats in that sequence; 6. Sum across all tickets.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Percentage of L2 Tickets Reassigned |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Percentage of L2 Tickets Reassigned |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Percentage of L2 Tickets Reassigned |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Percentage of L2 Tickets Reassigned |
| 🔴 1 | &gt;= (greater than or equal to) | 8 | Percentage of L2 Tickets Reassigned |

---

### 👨‍💼 8. S1 & S2 SLA

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 801 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of severity incidents

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets in a CSM’s projects that meet the defined SLA for Severity 1 and Severity 2 incidents.<br /> <br />**Severity Levels:** **S1** (Level 1 – Critical), **S2** (Level 2 – High)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S1, S2); Project→CSM mapping; Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Identify Scope:** fetch the CSM’s projects and their tickets; 2.<br />**Filter Tickets:** select Level 1 & 2 tickets in those projects for the period; 3.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA; 4.<br />**Compute Rate:** apply the formula; 5.<br />**Apply Weighting (if applicable):** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 100 | Percentage of S1 & S2 Tickets Within SLA |
| 🟢 4 | &gt;= (greater than or equal to) | 95 | Percentage of S1 & S2 Tickets Within SLA |
| 🟡 3 | &gt;= (greater than or equal to) | 90 | Percentage of S1 & S2 Tickets Within SLA |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of S1 & S2 Tickets Within SLA |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Percentage of S1 & S2 Tickets Within SLA |

---

### 🧪 9. Test Execution Time - Implementation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 802 |
| **Weightage** | 3% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Sit End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Measures the time taken to manually execute a set of test cases.

**🧮 Formula:** `# of Test Cases Executed / Total Time Taken`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 25 | Avg Test Execution Time (Implementation) |
| 🟢 4 | &gt;= (greater than or equal to) | 20 | Avg Test Execution Time (Implementation) |
| 🟡 3 | &gt;= (greater than or equal to) | 15 | Avg Test Execution Time (Implementation) |
| 🟠 2 | &gt;= (greater than or equal to) | 10 | Avg Test Execution Time (Implementation) |
| 🔴 1 | &lt;= (less than or equal to) | 10 | Avg Test Execution Time (Implementation) |

---

### 🐛 10. Invalid Bugs Count - Implementation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 803 |
| **Weightage** | 3% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Sit End |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Number of invalid bugs reported

**🧮 Formula:** `Invalid Bug Count = Number of issues in CSM’s projects where Phase="SIT" and Closing_Reason ∈ {"Reject","Not a Bug"}`

**📐 Calculation Details:**

**Purpose:** Count the number of bug reports in a CSM’s projects during the SIT phase that were later rejected or marked as not a bug.<br /> <br />**Formula:** `Invalid Bug Count = Number of issues in CSM’s projects where Phase="SIT" and Closing_Reason ∈ {"Reject","Not a Bug"}`<br /> <br />**Data Sources:** Jira “POL” project; Project→CSM mapping; Phase="SIT"; Closing_Reason (Reject, Not a Bug); Close Timestamp<br /> <br />**Calculation Steps:** 1. Query Jira "POL" for issues in the CSM’s projects where Phase="SIT" within the reporting period; 2. Filter to issues with Closing_Reason = "Reject" or "Not a Bug"; 3. Count the filtered issues.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Invalid Bugs (Implementation) |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Invalid Bugs (Implementation) |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Invalid Bugs (Implementation) |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Invalid Bugs (Implementation) |
| 🔴 1 | &gt;= (greater than or equal to) | 8 | Number of Invalid Bugs (Implementation) |

---

### 🧪 11. Test Case Automation - Implementation (all products on IRIS 5 platform)

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 804 |
| **Weightage** | 3% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** To measure number of cases automated during testing

**🧮 Formula:** `% of Unit Cases Automated`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Automated Test Cases (Implementation) |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Automated Test Cases (Implementation) |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Automated Test Cases (Implementation) |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Automated Test Cases (Implementation) |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Percentage of Automated Test Cases (Implementation) |

---

### 🧪 12. Test Case Automation - QA (all products on IRIS 5 platform)

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 805 |
| **Weightage** | 3% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** To measure number of cases automated during testing

**🧮 Formula:** `% of Unit Cases Automated`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Automated Test Cases (QA) |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Automated Test Cases (QA) |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Automated Test Cases (QA) |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Automated Test Cases (QA) |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Percentage of Automated Test Cases (QA) |

---

### 🚚 13. On-Time Project & CRF Delivery

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 806 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | EPM |
| **Frequency** | Annually |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:**  Percentage of projects / CRF delivered on or before the deadline. (Delay pertaining to clients excluded)

**🧮 Formula:** `if (ActualDate>BaselineDate) { if (Reason=="Customer Delay") OnTime else Delayed } else OnTime`

**📐 Calculation Details:**

**Purpose:** Assess whether projects meet planned timelines by comparing baseline vs. actual completion dates, treating customer delays as on time.<br /> <br />**Formula:** `if (ActualDate>BaselineDate) { if (Reason=="Customer Delay") OnTime else Delayed } else OnTime`; `% On-Time Delivery = (OnTimeProjects/TotalProjects)×100`<br /> <br />**Data Sources:**<br />**EPM:** project list; baseline completion dates; actual completion dates; delay reasons<br /> <br />**Calculation Steps:** 1. Retrieve projects from EPM; 2. For each, compare actual vs. baseline date; 3. If actual≤baseline or (actual&gt;baseline and reason=="Customer Delay") mark OnTime else Delayed; 4. Compute (OnTimeProjects/TotalProjects)×100<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 100 | Percentage of Projects & CRF Delivered On Time |
| 🟢 4 | &gt;= (greater than or equal to) | 80 | Percentage of Projects & CRF Delivered On Time |
| 🟡 3 | &gt;= (greater than or equal to) | 65 | Percentage of Projects & CRF Delivered On Time |
| 🟠 2 | &gt;= (greater than or equal to) | 60 | Percentage of Projects & CRF Delivered On Time |
| 🔴 1 | &lt;= (less than or equal to) | 60 | Percentage of Projects & CRF Delivered On Time |

---

### 🧪 14. Test Coverage

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 807 |
| **Weightage** | 4% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Project / Crf End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Indicates the percentage of the software that has been tested. 

**🧮 Formula:** `% of features assigned in a project / CRF`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Test Coverage |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Test Coverage |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Test Coverage |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Test Coverage |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Test Coverage |

---

### 🐛 15. Escape SIT Defect Count

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 808 |
| **Weightage** | 4% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Counts the number of defects that were not identified during testing but were discovered after the software was released. 

**🧮 Formula:** `SIT Defect Count = Number of issues where Phase=SIT and Project∈CSM’s projects`

**📐 Calculation Details:**

**Purpose:** Track the number of defects identified during System Integration Testing (SIT) in a CSM’s projects.<br />**Formula:** `SIT Defect Count = Number of issues where Phase=SIT and Project∈CSM’s projects`<br />**Data Sources:** Jira “POL” project; Project→CSM mapping; Phase=SIT; Close Timestamp<br />**Calculation Steps:** 1. Fetch the CSM’s projects via EPM; 2. Query Jira “POL” for issues where Phase=SIT in those projects within the reporting period; 3. Count the total issues returned.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 0 | Escape Defects Count SIT |
| 🟢 4 | &lt;= (less than or equal to) | 1 | Escape Defects Count SIT |
| 🟡 3 | &lt;= (less than or equal to) | 4 | Escape Defects Count SIT |
| 🟠 2 | &lt;= (less than or equal to) | 6 | Escape Defects Count SIT |
| 🔴 1 | &gt;= (greater than or equal to) | 6 | Escape Defects Count SIT |

---

### 🐛 16. Escape UAT Defect Count 

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 809 |
| **Weightage** | 4% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Project Milestone |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Counts the number of defects that were not identified during testing but were discovered after the software was released for UAT. 

**🧮 Formula:** `UAT Defect Count = Number of issues where Phase=UAT and Project∈CSM’s projects`

**📐 Calculation Details:**

**Purpose:** Track the number of defects reported during User Acceptance Testing (UAT) in a CSM’s projects.<br /> <br />**Formula:** `UAT Defect Count = Number of issues where Phase=UAT and Project∈CSM’s projects`<br /> <br />**Data Sources:** Jira “POL” project; Project→CSM mapping; Phase=UAT; Creation Timestamp<br /> <br />**Calculation Steps:** 1. Fetch the CSM’s projects via EPM; 2. Query Jira “POL” for issues where Phase=UAT in those projects within the reporting period; 3. Count the total issues returned.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 0 | Escape Defects Count UAT |
| 🟢 4 | &lt;= (less than or equal to) | 1 | Escape Defects Count UAT |
| 🟡 3 | &lt;= (less than or equal to) | 4 | Escape Defects Count UAT |
| 🟠 2 | &lt;= (less than or equal to) | 6 | Escape Defects Count UAT |
| 🔴 1 | &gt;= (greater than or equal to) | 6 | Escape Defects Count UAT |

---

### 🐛 17. Post Production Defects - Implementation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 810 |
| **Weightage** | 4% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Project Milestone |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Number of Post Production Defects after Cutover

**🧮 Formula:** `# of bugs logged post production`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 0 | Post Production Defects Count |
| 🟢 4 | &lt;= (less than or equal to) | 1 | Post Production Defects Count |
| 🟡 3 | &lt;= (less than or equal to) | 4 | Post Production Defects Count |
| 🟠 2 | &lt;= (less than or equal to) | 6 | Post Production Defects Count |
| 🔴 1 | &gt;= (greater than or equal to) | 6 | Post Production Defects Count |

---

### 👥 18. Employee Retention Rate

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 811 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | Survey |
| **Frequency** | Annually |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Percentage of employees who stay over a given period. (Resources leaving due to financial reasons or migrating out of country will not be part of calculation)

**🧮 Formula:** `Number of resources retained every year`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 85 | Employee Retention Rate |
| 🟢 4 | &gt;= (greater than or equal to) | 75 | Employee Retention Rate |
| 🟡 3 | &gt;= (greater than or equal to) | 70 | Employee Retention Rate |
| 🟠 2 | &gt;= (greater than or equal to) | 65 | Employee Retention Rate |
| 🔴 1 | &lt;= (less than or equal to) | 65 | Employee Retention Rate |

---

### 👨‍💼 19. Task Management on TFS

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 812 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Ensure all tasks are managed on TFS

**🧮 Formula:** `Utilization Rate (%) = (Total Estimated Task Effort / Resource Capacity) × 100`

**📐 Calculation Details:**

**Purpose:** Ensure all work is tracked in TFS by comparing each resource’s assigned task effort against their available capacity.<br /> <br />**Formula:** `Utilization Rate (%) = (Total Estimated Task Effort / Resource Capacity) × 100`<br /> <br />**Data Sources:** CSM Squad form WebhHR, Power BI Compliance Dashboard; Resource Capacity (available hours); TFS Project; Work Item Type = Task; Assigned Resource; Original Estimate (hours)<br /> <br />**Calculation Steps:** 1. Retrieve capacity from Power BI dashboard;<br /> 2. Query TFS for all tasks assigned in the period;<br /> 3. Sum Original Estimate to get Total Estimated Task Effort;<br /> 4. Divide by Resource Capacity × 100;<br /> 5. Interpret near-100% as optimal, &gt;100% over-allocated, &lt;100% under-utilized.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | TFS Task Coverage |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | TFS Task Coverage |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | TFS Task Coverage |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | TFS Task Coverage |
| 🔴 1 | &lt;= (less than or equal to) | 80 | TFS Task Coverage |

---

### 👨‍💼 20. WBS

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 813 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** No Task should be more than 1 day

**🧮 Formula:** `Non-Compliance Rate (%) = (Number of Tasks with Estimate > 8h / Total Number of Tasks Created) × 100`

**📐 Calculation Details:**

**Purpose:** Identify the proportion of newly created WBS tasks in a CSM’s projects whose original estimate exceeds one business day (8 hours).<br /> <br />**Formula:** `Non-Compliance Rate (%) = (Number of Tasks with Estimate > 8h / Total Number of Tasks Created) × 100`<br /> <br />**Data Sources:** CMS Squad Mapping from WebHR; TFS Project; Work Item Type = Task; Created Date (current month); Original Estimate (hours)<br /> <br />**Calculation Steps:** 1. Fetch the CSM squad from WebHR; 2. Query TFS Project for that squad for all Task work items created this month in those projects; 3. Read each task’s Original Estimate; 4. Count tasks where Estimate &gt; 8h; 5. Count total tasks; 6. Apply formula to compute the rate.<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage Of Tasks Completed Within 1-Day Duration |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage Of Tasks Completed Within 1-Day Duration |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage Of Tasks Completed Within 1-Day Duration |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage Of Tasks Completed Within 1-Day Duration |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Percentage Of Tasks Completed Within 1-Day Duration |

---

### 👨‍💼 21. FS & Technical Documentation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 814 |
| **Weightage** | 4% |
| **Measure** | Percentage |
| **Data Source** | TFS |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Ensure all Scope and technical documentation is uploaded and maintained on Teams

**🧮 Formula:** `Mandatory Documentation for the project`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Documentation Completion Rate |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Documentation Completion Rate |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Documentation Completion Rate |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Documentation Completion Rate |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Documentation Completion Rate |

---

### 💵 22. Revenue Realization

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 815 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | EPM |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Ensure milestones are achieved and invoices are raised timely

**🧮 Formula:** `if (ExceptionExists) { if (Reason=="Customer | Non-TPS") Realized else NotRealized } else Realized`

**📐 Calculation Details:**

KPI Name:** Revenue Realization<br /> <br />**Purpose:** Track the percentage of projects where revenue is successfully realized based on FSD sign-off exceptions and reasons, highlighting internal vs. customer blockers.<br /> <br />**Formula:** `if (ExceptionExists) { if (Reason=="Customer | Non-TPS") Realized else NotRealized } else Realized`; `Revenue Realization % = (ProjectsRealized/TotalProjects) × 100`<br /> <br />**Data Sources:**<br />**EPM:** Get Projects of CSM, FSD sign-off exception status; exception reasons<br /> <br />**Calculation Steps:** 1. Check FSD exception in EPM; 2. If no exception mark Realized; 3. If exception and reason="Customer/Non-TPS" mark Realized else NotRealized; 4. Compute (RealizedProjects/TotalProjects)×100<br />

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 85 | Percentage Of Milestones Achieved On Time |
| 🟢 4 | &gt;= (greater than or equal to) | 75 | Percentage Of Milestones Achieved On Time |
| 🟡 3 | &gt;= (greater than or equal to) | 70 | Percentage Of Milestones Achieved On Time |
| 🟠 2 | &gt;= (greater than or equal to) | 65 | Percentage Of Milestones Achieved On Time |
| 🔴 1 | &lt;= (less than or equal to) | 65 | Percentage Of Milestones Achieved On Time |

---

### 😊 23. Customer satisfaction on the project delivered

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 816 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | EPM |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Score provided by customer at the end of project

**🧮 Formula:** `Score provided by customer`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Customer Satisfaction Score |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Customer Satisfaction Score |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Customer Satisfaction Score |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Customer Satisfaction Score |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Customer Satisfaction Score |

---

### 🤝 24. Conflict resolution

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 817 |
| **Weightage** | 5% |
| **Measure** | Count |
| **Data Source** | Survey |
| **Frequency** | Per Project |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** This is measured by escalations coming to senior management. PM should be able to handle things on ground independently. The maximum escalation should be to program manager. Anything higher is negative.

**🧮 Formula:** `Escalation Log`

**👥 Applicability:**

- **Designation:** CSM

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 0 | Conflict Resolution Effectiveness |
| 🟢 4 | equals | 1 | Conflict Resolution Effectiveness |
| 🟡 3 | equals | 2 | Conflict Resolution Effectiveness |
| 🟠 2 | equals | 3 | Conflict Resolution Effectiveness |
| 🔴 1 | equals | 3 | Conflict Resolution Effectiveness |

---


## 📞 Support & Contact

For questions about this CSM KPI documentation, please contact the Performance Management team.

---
*This document was automatically generated from CSM KPI specifications on July 15, 2025*
