# 📋 QIS (Quality Implementation Support) KPI Reference Guide

*Generated on: July 09, 2025 at 05:59 PM*

## 🎯 Executive Summary

This document provides comprehensive details for **18 Key Performance Indicators (KPIs)** used to evaluate Quality Inspection Specialist performance for **System Engineer** role.

### 📈 Summary Statistics
- **Total KPIs:** 18
- **Total Weightage:** 100%
- **Automated KPIs:** 10 (55.6%)
- **Manual KPIs:** 8 (44.4%)

### 📊 Frequency Distribution
- **Monthly:** 10 KPIs
- **Per Sprint:** 4 KPIs
- **Post Production:** 1 KPIs
- **Quarterly:** 1 KPIs
- **Sit End:** 2 KPIs

### 💾 Data Sources
- **JIRA:** 18 KPIs

---

## 📋 Detailed KPI Specifications

### ⏱️ 1. Pulse Compliance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 703 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Ensure Pulse entries are updated regularly

**🧮 Formula:** `% of hours utilized`

**📐 Calculation Details:**

**Purpose:** Measure how accurately employees log their work hours in Pulse relative to their assigned capacity, ensuring discipline in time reporting and data integrity for planning.<br />**Formula:** `Compliance Rate (%) = Total Hours Reported in Pulse / Total Assigned Capacity Hours × 100`<br /> <br />**Data Sources:** BI Dashboard<br />**Calculation Steps:**<br /> Extract the compliance data from the BI dashboard daily for each resource, which already contains the computed compliance % to date for every resource.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | pulseCompliance |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | pulseCompliance |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | pulseCompliance |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | pulseCompliance |
| 🔴 1 | &gt; (greater than) | 80 | pulseCompliance |

---

### 📅 2. Attendance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 704 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Compliance to attendance policies

**🧮 Formula:** `% of working days marked`

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
| 🔴 1 | &gt; (greater than) | 80 | Attendance |

---

### 🎯 3. Test Case Effectiveness

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 705 |
| **Weightage** | 5% |
| **Measure** | Percentage |
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
| 🟢 5 | &gt;= (greater than or equal to) | 50 | testCaseEffectiveness |
| 🟢 4 | &gt;= (greater than or equal to) | 40 | testCaseEffectiveness |
| 🟡 3 | &gt;= (greater than or equal to) | 35 | testCaseEffectiveness |
| 🟠 2 | &gt;= (greater than or equal to) | 30 | testCaseEffectiveness |
| 🔴 1 | &gt; (greater than) | 30 | testCaseEffectiveness |

---

### ⚡ 4. QA Test Execution Time

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 706 |
| **Weightage** | 5% |
| **Measure** | Count |
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
| 🟢 5 | &gt;= (greater than or equal to) | 25 | testExecutionTime |
| 🟢 4 | &gt;= (greater than or equal to) | 20 | testExecutionTime |
| 🟡 3 | &gt;= (greater than or equal to) | 15 | testExecutionTime |
| 🟠 2 | &gt;= (greater than or equal to) | 10 | testExecutionTime |
| 🔴 1 | &gt; (greater than) | 10 | testExecutionTime |

---

### ⚡ 5. Implementation Test Execution Time

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 707 |
| **Weightage** | 5% |
| **Measure** | Count |
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
| 🟢 5 | &gt;= (greater than or equal to) | 25 | testExecutionTime |
| 🟢 4 | &gt;= (greater than or equal to) | 20 | testExecutionTime |
| 🟡 3 | &gt;= (greater than or equal to) | 15 | testExecutionTime |
| 🟠 2 | &gt;= (greater than or equal to) | 10 | testExecutionTime |
| 🔴 1 | &gt; (greater than) | 10 | testExecutionTime |

---

### 🐛 6. QA Invalid Bugs Count

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 708 |
| **Weightage** | 5% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Per Sprint |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Number of invalid bugs reported

**🧮 Formula:** `# of Rejected Bugs`

**📐 Calculation Details:**

**Purpose:** Count the number of bug reports submitted by QIS that were later rejected or marked as not a bug.<br /> <br />**Formula:** `Invalid Bug Count = Number of issues where Reporter = QIS and Closing_Reason ∈ {“Reject”, “Not a Bug”}`<br /> <br />**Data Sources:** Jira “POL” project; Reporter = QIS; Closing_Reason (Reject, Not a Bug); Close Timestamp<br /> <br />**Calculation Steps:**<br /> 1. Query Jira “POL” for all issues where Reporter = QIS within the reporting period.<br /> 2. From that set, filter issues whose Closing_Reason is “Reject” or “Not a Bug.”<br /> 3. Count the total number of filtered issues.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | invalidBugsCount |
| 🟢 4 | &lt;= (less than or equal to) | 4 | invalidBugsCount |
| 🟡 3 | &lt;= (less than or equal to) | 6 | invalidBugsCount |
| 🟠 2 | &lt;= (less than or equal to) | 8 | invalidBugsCount |
| 🔴 1 | &gt; (greater than) | 8 | invalidBugsCount |

---

### 🐛 7. Implementation Invalid Bugs Count

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 709 |
| **Weightage** | 5% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Sit End |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Number of invalid bugs reported

**🧮 Formula:** `# of Rejected Bugs`

**📐 Calculation Details:**

**Purpose:** Count the number of bug reports submitted by QIS that were later rejected or marked as not a bug.<br /> <br />**Formula:** `Invalid Bug Count = Number of issues where Reporter = QIS and Closing_Reason ∈ {“Reject”, “Not a Bug”}`<br /> <br />**Data Sources:** Jira “POL” project; Reporter = QIS; Closing_Reason (Reject, Not a Bug); Close Timestamp<br /> <br />**Calculation Steps:**<br /> 1. Query Jira “POL” for all issues where Reporter = QIS within the reporting period.<br /> 2. From that set, filter issues whose Closing_Reason is “Reject” or “Not a Bug.”<br /> 3. Count the total number of filtered issues.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | invalidBugsCount |
| 🟢 4 | &lt;= (less than or equal to) | 4 | invalidBugsCount |
| 🟡 3 | &lt;= (less than or equal to) | 6 | invalidBugsCount |
| 🟠 2 | &lt;= (less than or equal to) | 8 | invalidBugsCount |
| 🔴 1 | &gt; (greater than) | 8 | invalidBugsCount |

---

### ⏰ 8. QA SLA

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 710 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of QA is met for production issues

**🧮 Formula:** `SLA Achieved for tickets assigned`

**📐 Calculation Details:**

**Purpose:** Monitor how effectively the team resolves production issues within the agreed SLA window.<br />**Data Sources:** Jira “Production Issue” tickets; Assignment Timestamp; Completion Timestamp; SLA Target (hours).<br />**Calculation Steps:**<br />1.<br />**Select Tickets:** Pull all “Production Issue” tickets assigned during the reporting month.<br />2.<br />**Determine SLA Status:** classify as non-breached (resolution duration ≤ SLA Target) or breached (duration &gt; SLA Target).<br />3.<br />**Compute Rate:** `SLA Achievement Rate (%) = (Number of Non-breached Tickets / Total Tickets Assigned) × 100`<br />4.<br />**Evaluate Performance:** review the percentage of non-breached tickets to assess SLA compliance.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | qaTAT |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | qaTAT |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | qaTAT |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | qaTAT |
| 🔴 1 | &gt; (greater than) | 80 | qaTAT |

---

### 🔧 9. Production Patch Revert / Resubmission

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 711 |
| **Weightage** | 5% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Quarterly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** To measure number of patches that are either reverted or a subsequent patch has to be resubmitted

**🧮 Formula:** `# of Impacted Patches / Total number of Patches sent`

**📐 Calculation Details:**

**Purpose:** Measure the proportion of production patches that are reverted or require a subsequent resubmission.<br /> <br />**Formula:** `Patch Revert Rate (%) = (Number of Impacted Patches / Total Patches Sent) × 100`<br /> <br />**Data Sources:** Jira; Level 0 Sub-status; Status change history<br /> <br />**Definition of Terms:** Total Patches Sent = issues with Level 0 Sub-status = “Patch Dispatched to client” or “Awaiting Client Response”; Impacted Patches = those sent patches whose status changed from “Level 0 – Client End” back to “Level 2 – Support Engineer” while still in a sent sub-status.<br /> <br />**Calculation Steps:** 1. Query Jira for “sent” patches;<br /> 2. Count these as Total Patches Sent;<br /> 3. Identify reverts via status history and count as Impacted Patches;<br /> 4. Compute rate using the formula;<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | productionPatchRevert |
| 🟢 4 | &lt;= (less than or equal to) | 4 | productionPatchRevert |
| 🟡 3 | &lt;= (less than or equal to) | 6 | productionPatchRevert |
| 🟠 2 | &lt;= (less than or equal to) | 8 | productionPatchRevert |
| 🔴 1 | &gt; (greater than) | 8 | productionPatchRevert |

---

### 📊 10. Test Coverage

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 712 |
| **Weightage** | 5% |
| **Measure** | Percentage |
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
| 🟢 5 | &gt;= (greater than or equal to) | 95 | testCoverage |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | testCoverage |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | testCoverage |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | testCoverage |
| 🔴 1 | &gt; (greater than) | 80 | testCoverage |

---

### 🚨 11. Escape Defect Count SIT

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 713 |
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Counts the number of defects that were not identified during testing but were discovered after the software was released. 

**🧮 Formula:** `# of Defects per feature identified during SIT`

**📐 Calculation Details:**

**Purpose:** Track the number of defects identified during System Integration Testing (SIT) by each assignee.<br />**Formula:** <br /> <br />**Formula:** `SIT Defect Count = Number of issues where Phase = SIT and Assigned To = target user`<br />**Formula:** `SIT Defect Count = Number of issues where Phase = SIT and Assigned To = target user`<br />**Data Sources:** Jira “POL” project; Phase = “SIT”; Assigned To; Closed Timestamp.<br />**Calculation Steps:**<br />1. Query Jira “POL” for all issues where Phase = “SIT” and Assigned To = the target assignee, and Closed Timestamp falls within the reporting period.<br />2. Count the total number of issues returned.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | escapeDefectCountSIT |
| 🟢 4 | &lt;= (less than or equal to) | 4 | escapeDefectCountSIT |
| 🟡 3 | &lt;= (less than or equal to) | 6 | escapeDefectCountSIT |
| 🟠 2 | &lt;= (less than or equal to) | 8 | escapeDefectCountSIT |
| 🔴 1 | &gt; (greater than) | 8 | escapeDefectCountSIT |

---

### 🚨 12. Escape Defect Count UAT

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 714 |
| **Weightage** | 10% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Counts the number of defects that were not identified during testing but were discovered after the software was released. 

**🧮 Formula:** `# of Defects per feature identified during UAT`

**📐 Calculation Details:**

**Purpose:** Track the number of defects reported during User Acceptance Testing (UAT) by each reporter.<br /> <br />**Formula:** `UAT Defect Count = Number of issues where Phase = UAT and Reporter = target user`<br /> <br />**Data Sources:** Jira “POL” project; Phase = “UAT”; Reporter; Creation Timestamp<br /> <br />**Calculation Steps:**<br /> 1. Query Jira “POL” for all issues where Phase = “UAT” and Reporter = the target user within the reporting period.<br /> 2. Count the total number of issues returned.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | escapeDefectCountUAT |
| 🟢 4 | &lt;= (less than or equal to) | 4 | escapeDefectCountUAT |
| 🟡 3 | &lt;= (less than or equal to) | 6 | escapeDefectCountUAT |
| 🟠 2 | &lt;= (less than or equal to) | 8 | escapeDefectCountUAT |
| 🔴 1 | &gt; (greater than) | 8 | escapeDefectCountUAT |

---

### 🤖 13. QA Test Case Automation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 715 |
| **Weightage** | 5% |
| **Measure** | Percentage |
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
| 🟢 5 | &gt;= (greater than or equal to) | 95 | testCaseAutomation |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | testCaseAutomation |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | testCaseAutomation |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | testCaseAutomation |
| 🔴 1 | &gt; (greater than) | 80 | testCaseAutomation |

---

### 🤖 14. Implementation Test Case Automation

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 716 |
| **Weightage** | 5% |
| **Measure** | Percentage |
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
| 🟢 5 | &gt;= (greater than or equal to) | 95 | testCaseAutomation |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | testCaseAutomation |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | testCaseAutomation |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | testCaseAutomation |
| 🔴 1 | &gt; (greater than) | 80 | testCaseAutomation |

---

### 🏭 15. Post Production Defects

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 717 |
| **Weightage** | 5% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Post Production |
| **Automation** | 👤 Manual |
| **Default Score** | 5 |

**📝 Description:** Number of Post Production Defects after Cutover

**🧮 Formula:** `# of bugs logged post production`

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | postProductionDefects |
| 🟢 4 | &lt;= (less than or equal to) | 4 | postProductionDefects |
| 🟡 3 | &lt;= (less than or equal to) | 6 | postProductionDefects |
| 🟠 2 | &lt;= (less than or equal to) | 8 | postProductionDefects |
| 🔴 1 | &gt; (greater than) | 8 | postProductionDefects |

---

### ⚡ 16. L2 SLA - S3 & S4

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 718 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of Investigation once the issue is reported

**🧮 Formula:** `SLA Achieved for tickets assigned`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to you that meet the defined SLA for Severity 3 and Severity 4 incidents.<br /> <br />**Severity Levels:** **S3** (Level 3 – Normal), **S4** (Level 4 – General)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S3, S4);; Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Filter Tickets:** select Level 3 & 4 tickets assigned in the period.<br /> 2.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 3.<br />**Compute Rate:** apply the formula.<br /> 4.<br />**Apply Weighting:** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | l2TAT |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | l2TAT |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | l2TAT |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | l2TAT |
| 🔴 1 | &gt; (greater than) | 80 | l2TAT |

---

### 🔄 17. L2 Reassignment

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 719 |
| **Weightage** | 5% |
| **Measure** | Count |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Number of reassigned tickets once the issue is identified as a bug and assigned to the QIS again

**🧮 Formula:** `# of Reassigned Tickets / # of Tickets identified as bugs`

**📐 Calculation Details:**

**KPI:** Ticket Reassignment Count<br />**Purpose:** Measure how often tickets with Assignment Level 2 are reassigned back to a Level-2 role they’ve already been through (even after moving to other roles) before completion.<br />**Formula:** `Ticket Reassignment Count = Total number of reassignment events where Assignment Level = 2 and Role after = any Level-2 role already in this ticket’s history`<br />**Data Sources:** Ticketing System (e.g., Jira “POL” project); Assignment Level; Status History; Assignment History<br />**Calculation Steps:** 1. Query tickets where Assignment Level = 2 that reached “Completed” status within the reporting period.<br />2. For each ticket, retrieve its full assignment-change history in chronological order.<br />3. Track the sequence of Level-2 roles the ticket has been assigned to (Support, Network, Database).<br />4. Whenever it’s assigned to a Level-2 role that already appears earlier in that sequence, count one reassignment event (e.g., Support → Network → Database → **Network** (reassignment #1) → **Support** (reassignment #2)).<br />5. Sum all such events across completed Level-2 tickets to get the Ticket Reassignment Count for the period.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 2 | l2Reassignment |
| 🟢 4 | &lt;= (less than or equal to) | 4 | l2Reassignment |
| 🟡 3 | &lt;= (less than or equal to) | 6 | l2Reassignment |
| 🟠 2 | &lt;= (less than or equal to) | 8 | l2Reassignment |
| 🔴 1 | &gt; (greater than) | 8 | l2Reassignment |

---

### 🚨 18. S1 & S2 SLA

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 720 |
| **Weightage** | 5% |
| **Measure** | Percentage |
| **Data Source** | JIRA |
| **Frequency** | Monthly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** To measure SLA of severity incidents

**🧮 Formula:** `SLA Achieved for severity incidents`

**📐 Calculation Details:**

**Purpose:** Measure the percentage of production tickets assigned to QIS that meet the defined SLA for Severity 1 and Severity 2 incidents.<br /> <br />**Severity Levels:** **S1** (Level 1 – Severe), **S2** (Level 2 – Critical)<br /> <br />**Formula:** `SLA Achievement Rate (%) = (Tickets Resolved Within SLA / Total Tickets Assigned) × 100`<br /> <br />**Data Sources:** Ticketing System; Severity (S1, S2); Resolution Timestamp; SLA Target (by severity level)<br /> <br />**Calculation Steps:** 1.<br />**Filter Tickets:** Severity wise select Level 1 & 2 tickets assigned to a resourcein the period.<br /> 2.<br />**Assess SLA Compliance:** compare each ticket’s resolution time vs. SLA target and count those resolved within SLA.<br /> 3.<br />**Compute Rate:** apply the formula.<br /> 4.<br />**Apply Weighting:** multiply the result by the KPI’s weight.<br />

**👥 Applicability:**

- **Designation:** System Engineer

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | s1S2TAT |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | s1S2TAT |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | s1S2TAT |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | s1S2TAT |
| 🔴 1 | &gt; (greater than) | 80 | s1S2TAT |


---
*This document was automatically generated from KPI specifications on July 09, 2025*
