# 🔍 QIS KPI Reference Guide

*Generated on: July 17, 2025 at 08:03 PM*

## 🔍 Executive Summary

This document provides comprehensive details for **18 Key Performance Indicators (KPIs)** used to evaluate QIS performance for **System Engineer** role.

### 📈 Summary Statistics
- **Total KPIs:** 18
- **Total Weightage:** 100%
- **Automated KPIs:** 10 (55.6%)
- **Manual KPIs:** 8 (44.4%)

### 📊 Frequency Distribution
- **Monthly:** 11 KPIs
- **Per Sprint:** 4 KPIs
- **Post Production:** 1 KPIs
- **Sit End:** 2 KPIs

### 💾 Data Sources
- **BI Dashboard:** 1 KPIs
- **JIRA:** 17 KPIs

### 📏 Measure Types
- **count:** 7 KPIs
- **percentage:** 11 KPIs

---

## 📋 Detailed KPI Specifications

### 🐛 1. Escape Defect Count UAT

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 714 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Counts the number of defects that were not identified during testing but were discovered after the software was released. 

**🧮 Formula:** `UAT Defect Count = Number of issues where Phase = UAT and Reporter = target user`

**📐 Calculation Details:**

**Purpose:** Track the number of defects reported during User Acceptance Testing (UAT) by each reporter.<br /> <br />**Formula:** `UAT Defect Count = Number of issues where Phase = UAT and Reporter = target user`<br /> <br />**Data Sources:** Jira “POL” project; Phase = “UAT”; Reporter; Creation Timestamp<br /> <br />**Calculation Steps:**<br /> 1. Query Jira “POL” for all issues where Phase = “UAT” and Reporter = the target user within the reporting period.<br /> 2. Count the total number of issues returned.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Escaped Defects in UAT |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Escaped Defects in UAT |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Escaped Defects in UAT |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Escaped Defects in UAT |
| 🔴 1 | &gt; (greater than) | 8 | Number of Escaped Defects in UAT |

---

### 🐛 2. Post Production Defects

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 717 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Post Production |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Number of Post Production Defects after Cutover

**🧮 Formula:** `# of bugs logged post production`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Post Production Defects |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Post Production Defects |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Post Production Defects |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Post Production Defects |
| 🔴 1 | &gt; (greater than) | 8 | Number of Post Production Defects |

---

### 🔍 3. Production Patch Revert / Resubmission

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 711 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure number of patches that are either reverted or a subsequent patch has to be resubmitted

**🧮 Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the proportion of production patches that are reverted or require a subsequent resubmission.<br /> <br />**Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`<br /> <br />**Data Sources:** Jira; Level 0 Sub-status; Status change history<br /> <br />**Definition of Terms:** Total Patches Sent = issues with Level 0 Sub-status = “Patch Dispatched to client” or “Awaiting Client Response”; Impacted Patches = those sent patches whose status changed from “Level 0 – Client End” back to “Level 2 – Support Engineer” while still in a sent sub-status.<br /> <br />**Calculation Steps:** 1. Query Jira for “sent” patches;<br /> 2. Count these as Total Patches Sent;<br /> 3. Identify reverts via status history and count as Impacted Patches;<br /> 4. Compute rate using the formula;<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Patch Revert |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Patch Revert |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Patch Revert |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Patch Revert |
| 🔴 1 | &gt; (greater than) | 8 | Number of Patch Revert |

---

### 🧪 4. QA Test Case Automation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 715 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** To measure number of cases automated during testing

**🧮 Formula:** `% of Unit Cases Automated`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Automated Test Cases |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Automated Test Cases |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Automated Test Cases |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Automated Test Cases |
| 🔴 1 | &gt; (greater than) | 80 | Percentage of Automated Test Cases |

---

### 🧪 5. QA Test Execution Time

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 706 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Per Sprint |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Measures the time taken to execute a set of test cases.

**🧮 Formula:** `# of Test Cases Executed / Total Time Taken`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 25 | Avg Test Execution Time |
| 🟢 4 | &gt;= (greater than or equal to) | 20 | Avg Test Execution Time |
| 🟡 3 | &gt;= (greater than or equal to) | 15 | Avg Test Execution Time |
| 🟠 2 | &gt;= (greater than or equal to) | 10 | Avg Test Execution Time |
| 🔴 1 | &gt; (greater than) | 10 | Avg Test Execution Time |

---

### 🐛 6. QA Invalid Bugs Count

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 708 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Per Sprint |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Number of invalid bugs reported

**🧮 Formula:** `Invalid Bug Count = Number of issues where Reporter = QIS and Closing_Reason ∈ {“Reject”, “Not a Bug”}`

**📐 Calculation Details:**

**Purpose:** Count the number of bug reports submitted by QIS that were later rejected or marked as not a bug.<br /> <br />**Formula:** `Invalid Bug Count = Number of issues where Reporter = QIS and Closing_Reason ∈ {“Reject”, “Not a Bug”}`<br /> <br />**Data Sources:** Jira “POL” project; Reporter = QIS; Closing_Reason (Reject, Not a Bug); Close Timestamp<br /> <br />**Calculation Steps:**<br /> 1. Query Jira “POL” for all issues where Reporter = QIS within the reporting period.<br /> 2. From that set, filter issues whose Closing_Reason is “Reject” or “Not a Bug.”<br /> 3. Count the total number of filtered issues.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Invalid Bugs |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Invalid Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Invalid Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Invalid Bugs |
| 🔴 1 | &gt; (greater than) | 8 | Number of Invalid Bugs |

---

### 🧪 7. Test Case Effectiveness

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 705 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Per Sprint |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** the percentage of test cases that successfully identify defects. 

**🧮 Formula:** `% of # of Defects / # of Test Cases Executed`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 50 | % of Effective Test Cases |
| 🟢 4 | &gt;= (greater than or equal to) | 40 | % of Effective Test Cases |
| 🟡 3 | &gt;= (greater than or equal to) | 35 | % of Effective Test Cases |
| 🟠 2 | &gt;= (greater than or equal to) | 30 | % of Effective Test Cases |
| 🔴 1 | &gt; (greater than) | 30 | % of Effective Test Cases |

---

### 🧪 8. Test Coverage

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 712 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Per Sprint |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Indicates the percentage of the software that has been tested. 

**🧮 Formula:** `% of features assigned in a sprint`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Features Tested |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Features Tested |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Features Tested |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Features Tested |
| 🔴 1 | &gt; (greater than) | 80 | Percentage of Features Tested |

---

### 🐛 9. Implementation Invalid Bugs Count

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 709 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Sit End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Number of invalid bugs reported

**🧮 Formula:** `Invalid Bug Count = Number of issues where Reporter = QIS and Closing_Reason ∈ {“Reject”, “Not a Bug”}`

**📐 Calculation Details:**

**Purpose:** Count the number of bug reports submitted by QIS that were later rejected or marked as not a bug.<br /> <br />**Formula:** `Invalid Bug Count = Number of issues where Reporter = QIS and Closing_Reason ∈ {“Reject”, “Not a Bug”}`<br /> <br />**Data Sources:** Jira “POL” project; Reporter = QIS; Closing_Reason (Reject, Not a Bug); Close Timestamp<br /> <br />**Calculation Steps:**<br /> 1. Query Jira “POL” for all issues where Reporter = QIS within the reporting period.<br /> 2. From that set, filter issues whose Closing_Reason is “Reject” or “Not a Bug.”<br /> 3. Count the total number of filtered issues.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Invalid Bugs |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Invalid Bugs |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Invalid Bugs |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Invalid Bugs |
| 🔴 1 | &gt; (greater than) | 8 | Number of Invalid Bugs |

---

### 🧪 10. Implementation Test Case Automation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 716 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** To measure number of cases automated during testing

**🧮 Formula:** `% of Unit Cases Automated`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Automated Test Cases |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Automated Test Cases |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Automated Test Cases |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Automated Test Cases |
| 🔴 1 | &gt; (greater than) | 80 | Percentage of Automated Test Cases |

---

### 🧪 11. Implementation Test Execution Time

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 707 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Sit End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Measures the time taken to execute a set of test cases.

**🧮 Formula:** `# of Test Cases Executed / Total Time Taken`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 25 | Avg Test Execution Time |
| 🟢 4 | &gt;= (greater than or equal to) | 20 | Avg Test Execution Time |
| 🟡 3 | &gt;= (greater than or equal to) | 15 | Avg Test Execution Time |
| 🟠 2 | &gt;= (greater than or equal to) | 10 | Avg Test Execution Time |
| 🔴 1 | &gt; (greater than) | 10 | Avg Test Execution Time |

---

### 🔍 12. L2 Reassignment

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 719 |
| **Weightage** | 5% |
| **Measure** | count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Number of reassigned tickets once the issue is identified as a bug and assigned to developer

**🧮 Formula:** `Ticket Reassignment Count = Total number of reassignment events where Assignment Level = 2 and Role after = any Level-2 role already in this ticket’s history`

**📐 Calculation Details:**

**KPI:** Ticket Reassignment Count<br />**Purpose:** Measure how often tickets with Assignment Level 2 are reassigned back to a Level-2 role they’ve already been through (even after moving to other roles) before completion.<br />**Formula:** `Ticket Reassignment Count = Total number of reassignment events where Assignment Level = 2 and Role after = any Level-2 role already in this ticket’s history`<br />**Data Sources:** Ticketing System (e.g., Jira “POL” project); Assignment Level; Status History; Assignment History<br />**Calculation Steps:** 1. Query tickets where Assignment Level = 2 that reached “Completed” status within the reporting period.<br />2. For each ticket, retrieve its full assignment-change history in chronological order.<br />3. Track the sequence of Level-2 roles the ticket has been assigned to (Support, Network, Database).<br />4. Whenever it’s assigned to a Level-2 role that already appears earlier in that sequence, count one reassignment event (e.g., Support → Network → Database → **Network** (reassignment #1) → **Support** (reassignment #2)).<br />5. Sum all such events across completed Level-2 tickets to get the Ticket Reassignment Count for the period.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of reassigned tickets |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of reassigned tickets |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of reassigned tickets |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of reassigned tickets |
| 🔴 1 | &gt; (greater than) | 8 | Number of reassigned tickets |

---

### 🔍 13. L2 SLA - S3 & S4

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 718 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of Investigation once the issue is reported

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to you that meet the defined SLA for Severity 3 and Severity 4 incidents.<br /> <br />**Severity Levels:** **S3** (Level 3 – Normal), **S4** (Level 4 – General)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S3, S4);; Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Filter Tickets:** select Level 3 & 4 tickets assigned in the period.<br /> 2.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 3.<br />**Compute Rate:** apply the formula.<br /> 4.<br />**Apply Weighting:** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of TAT Achieved |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of TAT Achieved |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of TAT Achieved |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of TAT Achieved |
| 🔴 1 | &gt; (greater than) | 80 | Percentage of TAT Achieved |

---

### ⏱️ 14. Pulse Compliance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 703 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Ensure Pulse entries are updated regularly

**🧮 Formula:** `Compliance Rate (%) = Total Hours Reported in Pulse / Total available Capacity Hours × 100`

**📐 Calculation Details:**

**Purpose:** Measure how accurately employees log their work hours in Pulse relative to their available capacity, ensuring discipline in time reporting and data integrity for planning.<br />**Formula:** `Compliance Rate (%) = Total Hours Reported in Pulse / Total available Capacity Hours × 100`<br /> <br />**Data Sources:** BI Dashboard<br />**Calculation Steps:**<br /> Extract the compliance data from the BI dashboard daily for each resource, which already contains the computed compliance % to date for every resource.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Pulse Hours Logged |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Pulse Hours Logged |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Pulse Hours Logged |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Pulse Hours Logged |
| 🔴 1 | &gt; (greater than) | 80 | Percentage of Pulse Hours Logged |

---

### 🔍 15. QA SLA

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 710 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of QA is met for production issues

**🧮 Formula:** `(Number of Non-breached Tickets / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Monitor how effectively the team resolves production issues within the agreed SLA window.<br />**Data Sources:** Jira “Production Issue” tickets; Assignment Timestamp; Completion Timestamp; SLA Target (hours).<br />**Calculation Steps:**<br />1.<br />**Select Tickets:** Pull all “Production Issue” tickets assigned during the reporting month.<br />2.<br />**Determine SLA Status:** classify as non-breached (resolution duration ≤ SLA Target) or breached (duration &gt; SLA Target).<br />3.<br />**Compute Rate:** `SLA Achievement Rate (%) = (Number of Non-breached Tickets / Total Tickets Assigned) × 100`<br />4.<br />**Evaluate Performance:** review the percentage of non-breached tickets to assess SLA compliance.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of QA Issues Resolved On Time |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of QA Issues Resolved On Time |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of QA Issues Resolved On Time |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of QA Issues Resolved On Time |
| 🔴 1 | &gt; (greater than) | 80 | Percentage of QA Issues Resolved On Time |

---

### 🔍 16. S1 & S2 SLA

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 720 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of severity incidents

**🧮 Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to QIS that meet the defined SLA for Severity 1 and Severity 2 incidents.<br /> <br />**Severity Levels:** **S1** (Level 1 – Severe), **S2** (Level 2 – Critical)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S1, S2); Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Filter Tickets:** Severity wise select Level 1 & 2 tickets assigned to a resourcein the period.<br /> 2.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 3.<br />**Compute Rate:** apply the formula.<br /> 4.<br />**Apply Weighting:** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of TAT Achieved |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of TAT Achieved |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of TAT Achieved |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of TAT Achieved |
| 🔴 1 | &lt; (less than) | 80 | Percentage of TAT Achieved |

---

### 🐛 17. Escape Defect Count SIT

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 713 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Counts the number of defects that were not identified during testing but were discovered after the software was released. 

**🧮 Formula:** `SIT Defect Count = Number of issues where Phase = SIT and Assigned To = target user`

**📐 Calculation Details:**

**Purpose:** Track the number of defects identified during System Integration Testing (SIT) by each assignee.<br />**Formula:** <br /> <br />**Formula:** `SIT Defect Count = Number of issues where Phase = SIT and Assigned To = target user`<br />**Formula:** `SIT Defect Count = Number of issues where Phase = SIT and Assigned To = target user`<br />**Data Sources:** Jira “POL” project; Phase = “SIT”; Assigned To; Closed Timestamp.<br />**Calculation Steps:**<br />1. Query Jira “POL” for all issues where Phase = “SIT” and Assigned To = the target assignee, and Closed Timestamp falls within the reporting period.<br />2. Count the total number of issues returned.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | Number of Escaped Defects in SIT |
| 🟢 4 | &lt;= (less than or equal to) | 4 | Number of Escaped Defects in SIT |
| 🟡 3 | &lt;= (less than or equal to) | 6 | Number of Escaped Defects in SIT |
| 🟠 2 | &lt;= (less than or equal to) | 8 | Number of Escaped Defects in SIT |
| 🔴 1 | &gt; (greater than) | 8 | Number of Escaped Defects in SIT |

---

### 🔍 18. Attendance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 704 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Compliance to attendance policies

**🧮 Formula:** `NonCompliantDay = (No AttendanceRecord) AND (No LeaveRecord)`

**📐 Calculation Details:**

**Purpose:** Ensure that every workday is covered by either a valid attendance record or an approved leave entry; missing both constitutes non-compliance.<br /> <br />**Formula:** `NonCompliantDay = (No AttendanceRecord) AND (No LeaveRecord)`<br /> <br />**Data Sources:** WebHR<br /> <br />**Calculation Steps:**<br /> 1. For each employee, check the date three days prior to today to allow for data processing.<br /> 2.<br />**Query WebHR:** is there an AttendanceRecord? is there a LeaveRecord?<br /> 3. If neither exists, mark the day as non-compliant (NonCompliantDay = true).<br /> 4. Repeat daily to maintain a running tally of non-compliant days.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Attendance |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Attendance |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Attendance |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Attendance |
| 🔴 1 | &lt; (less than) | 80 | Attendance |

---


## 📞 Support & Contact

For questions about this QIS KPI documentation, please contact the Performance Management team.

---
*This document was automatically generated from QIS KPI specifications on July 17, 2025*
