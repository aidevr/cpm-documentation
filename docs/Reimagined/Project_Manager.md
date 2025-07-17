# 📋 Project Manager KPI Reference Guide

*Generated on: July 17, 2025 at 08:02 PM*

## 📋 Executive Summary

This document provides comprehensive details for **13 Key Performance Indicators (KPIs)** used to evaluate Project Manager performance for **Project Manager** role.

### 📈 Summary Statistics
- **Total KPIs:** 13
- **Total Weightage:** 100%
- **Automated KPIs:** 7 (53.8%)
- **Manual KPIs:** 6 (46.2%)

### 📊 Frequency Distribution
- **Project End:** 10 KPIs
- **Quarterly:** 2 KPIs
- **Weekly:** 1 KPIs

### 💾 Data Sources
- **BI Dashboard:** 5 KPIs
- **EPM:** 4 KPIs
- **MS Teams:** 1 KPIs
- **Survey:** 3 KPIs

### 📏 Measure Types
- **percentage:** 13 KPIs

---

## 📋 Detailed KPI Specifications

### 🔥 1. Gross Burn Rate

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 821 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Weekly |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Speed at which the project is consuming its budget.

**🧮 Formula:** `Gross Burn Rate (%) = (Actual Cost − Budget Estimated) / Budget Estimated × 100`

**📐 Calculation Details:**

**Purpose:** Measure the pace at which a project is consuming its budget, indicating spending velocity relative to planning.<br /> <br />**Formula:** `Gross Burn Rate (%) = (Actual Cost − Budget Estimated) / Budget Estimated × 100`<br /> <br />**Data Sources:** EPM SharePoint “Project Managers Project” list (PlannedBudget); Power BI Dashboard (Actual Cost)<br /> <br />**Calculation Steps:** 1. Fetch PM’s projects from the SharePoint list. 2. Retrieve PlannedBudget for each project. 3. Retrieve Actual Cost from the Power BI dashboard for the period. 4. For each project, compute Burn Rate (%) = (Actual Cost − PlannedBudget) / PlannedBudget × 100. 5. Aggregate by averaging burn‐rate percentages across all projects.

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 5 | Percentage of Budget Overshoot |
| 🟢 4 | &lt;= (less than or equal to) | 10 | Percentage of Budget Overshoot |
| 🟡 3 | &lt;= (less than or equal to) | 15 | Percentage of Budget Overshoot |
| 🟠 2 | &lt;= (less than or equal to) | 18 | Percentage of Budget Overshoot |
| 🔴 1 | &gt;= (greater than or equal to) | 18 | Percentage of Budget Overshoot |

---

### 💰 2. Average CRF Profitability

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 819 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Quarterly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Profitability of CRF

**🧮 Formula:** `% Cost of Project / Revenue of CRF`

**📐 Calculation Details:**

**Data Sources:** Power BI Dashboard (Project Cost); EPM SharePoint “Project Managers Project”<br />**list (Project Revenue) Calculation Steps:** 1.<br />**Retrieve Projects:** pull all entries from the SharePoint list. 2.<br />**Extract Financials:** for each project, get Cost from the Power BI Dashboard and Revenue from SharePoint. 3.<br />**Compute Profitability per Project:** Profitability (%) = (Cost / Revenue) × 100. 4.<br />**Aggregate to Average:** sum all project profitability percentages and divide by total number of projects.

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 110 | Average CRF Profitability |
| 🟢 4 | &gt;= (greater than or equal to) | 100 | Average CRF Profitability |
| 🟡 3 | &gt;= (greater than or equal to) | 90 | Average CRF Profitability |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Average CRF Profitability |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Average CRF Profitability |

---

### ⏱️ 3. Pulse Compliance

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 823 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Ensure Effective Pulse entries for Project

**🧮 Formula:** `(Total Hours Billed by PM / PM’s Total Available Capacity) × 100`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Percentage of Hours Logged |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Percentage of Hours Logged |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Percentage of Hours Logged |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Percentage of Hours Logged |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Percentage of Hours Logged |

---

### 💵 4. Revenue Realization

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 822 |
| **Weightage** | 15% |
| **Measure** | percentage |
| **Data Source** | EPM |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Ensure milestones are achieved and invoices are raised timely

**🧮 Formula:** ` if (ExceptionExists) { if (Reason=="Customer | Non-TPS") Realized else NotRealized } else Realized; Revenue Realization % = (ProjectsRealized/TotalProjects) × 100`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 85 | Percentage of Timely Achieved Milestone |
| 🟢 4 | &gt;= (greater than or equal to) | 75 | Percentage of Timely Achieved Milestone |
| 🟡 3 | &gt;= (greater than or equal to) | 70 | Percentage of Timely Achieved Milestone |
| 🟠 2 | &gt;= (greater than or equal to) | 65 | Percentage of Timely Achieved Milestone |
| 🔴 1 | &lt;= (less than or equal to) | 65 | Percentage of Timely Achieved Milestone |

---

### ⚡ 5. RUM

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 820 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Average Utilization Margin of Resources on Revenue Generating Tasks

**🧮 Formula:** ` (Billable Hours Logged by PM / Total Available Hours of PM) × 100`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Resource Utilization |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Resource Utilization |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Resource Utilization |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Resource Utilization |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Resource Utilization |

---

### 📊 6. Scheduled Variance - Planned vs Actual

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 824 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | EPM |
| **Frequency** | Project End |
| **Automation** | ✅ Automated |
| **Default Score** | 5 |

**📝 Description:** Difference between planned and actual project timelines.

**🧮 Formula:** `if (ActualDate>BaselineDate) { if (Reason==\"Customer Delay\") OnTime else Delayed } else OnTime`

**📐 Calculation Details:**

**Purpose:** Assess whether projects meet planned timelines by comparing baseline vs. actual completion dates, treating customer delays as on time.<br /> <br />**Formula:** `if (ActualDate>BaselineDate) { if (Reason==\"Customer Delay\") OnTime else Delayed } else OnTime`; `% On-Time Delivery = (OnTimeProjects/TotalProjects)×100`<br /> <br />**Data Sources:**<br />**EPM:** project list; baseline completion dates; actual completion dates; delay reasons<br /> <br />**Calculation Steps:** 1. Retrieve projects from EPM; 2. For each, compare actual vs. baseline date; 3. If actual≤baseline or (actual&gt;baseline and reason==\"Customer Delay\") mark OnTime else Delayed; 4. Compute (OnTimeProjects/TotalProjects)×100

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &lt;= (less than or equal to) | 5 | Percentage of Timeline Deviation |
| 🟢 4 | &lt;= (less than or equal to) | 15 | Percentage of Timeline Deviation |
| 🟡 3 | &lt;= (less than or equal to) | 20 | Percentage of Timeline Deviation |
| 🟠 2 | &lt;= (less than or equal to) | 25 | Percentage of Timeline Deviation |
| 🔴 1 | &gt;= (greater than or equal to) | 25 | Percentage of Timeline Deviation |

---

### 💰 7. Average Project Profitability

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 818 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | BI Dashboard |
| **Frequency** | Quarterly |
| **Automation** | ✅ Automated |
| **Default Score** | 0 |

**📝 Description:** Profitability of Project

**🧮 Formula:** `Project Profitability (%) = (Cost of Project / Revenue of Project) × 100`

**📐 Calculation Details:**

**KPI:** Average Project Profitability (%)<br />**Purpose:** Evaluate how cost-efficient projects are by comparing their cost to revenue, then averaging across all projects.<br />**Formula:** `Project Profitability (%) = (Cost of Project / Revenue of Project) × 100` and `Average Project Profitability (%) = (Sum of all Project Profitability %) / Number of Projects`<br />**Data Sources:** Power BI Dashboard (Project Cost); EPM SharePoint “Project Managers Project” list (Project Revenue)<br />**Calculation Steps:** 1.<br />**Retrieve Projects:** pull all entries from the SharePoint list.<br />2.<br />**Extract Financials:** for each project, get Cost from the Power BI Dashboard and Revenue from SharePoint.<br />3.<br />**Compute Profitability per Project:** `Profitability (%) = (Cost / Revenue) × 100`.<br />4.<br />**Aggregate to Average:** sum all project profitability percentages and divide by total number of projects.<br />5.<br />**Apply Weighting:** multiply the average profitability by the KPI’s assigned weight to derive the weighted score.

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 110 | Average Project Profitability |
| 🟢 4 | &gt;= (greater than or equal to) | 100 | Average Project Profitability |
| 🟡 3 | &gt;= (greater than or equal to) | 90 | Average Project Profitability |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Average Project Profitability |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Average Project Profitability |

---

### 🤝 8. Conflict resolution

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 829 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | Survey |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Customer Satisfaction

**🧮 Formula:** `N/A`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 0 | Conflict Resolution |
| 🟢 4 | equals | 1 | Conflict Resolution |
| 🟡 3 | equals | 2 | Conflict Resolution |
| 🟠 2 | equals | 3 | Conflict Resolution |
| 🔴 1 | equals | 3 | Conflict Resolution |

---

### 😊 9. Customer satisfaction on the project delivered

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 826 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | Survey |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Customer Satisfaction

**🧮 Formula:** `Score provided by customer`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Customer Satisfaction |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Customer Satisfaction |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Customer Satisfaction |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Customer Satisfaction |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Customer Satisfaction |

---

### 📝 10. Document Maintenance on Teams

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 827 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | MS Teams |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Governance

**🧮 Formula:** `# of mandatory documents for a project`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 95 | Document Maintenance |
| 🟢 4 | &gt;= (greater than or equal to) | 90 | Document Maintenance |
| 🟡 3 | &gt;= (greater than or equal to) | 85 | Document Maintenance |
| 🟠 2 | &gt;= (greater than or equal to) | 80 | Document Maintenance |
| 🔴 1 | &lt;= (less than or equal to) | 80 | Document Maintenance |

---

### ✅ 11. Ontime Completion Rate

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 825 |
| **Weightage** | 10% |
| **Measure** | percentage |
| **Data Source** | EPM |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Percentage of tasks completed on schedule.

**🧮 Formula:** `% of tasks completed on time`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | &gt;= (greater than or equal to) | 85 | Percentage of Tasks Completed On Time |
| 🟢 4 | &gt;= (greater than or equal to) | 75 | Percentage of Tasks Completed On Time |
| 🟡 3 | &gt;= (greater than or equal to) | 70 | Percentage of Tasks Completed On Time |
| 🟠 2 | &gt;= (greater than or equal to) | 65 | Percentage of Tasks Completed On Time |
| 🔴 1 | &lt;= (less than or equal to) | 65 | Percentage of Tasks Completed On Time |

---

### 🤔 12. Project Decision Making

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 828 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | EPM |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Governance

**🧮 Formula:** `Project should be rebaselined within 2 weeks of being off track`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 1 | Project Decision Making |
| 🟢 4 | equals | 2 | Project Decision Making |
| 🟡 3 | equals | 3 | Project Decision Making |
| 🟠 2 | equals | 4 | Project Decision Making |
| 🔴 1 | equals | 4 | Project Decision Making |

---

### 🔍 13. Project Forensic

| Attribute | Value |
|-----------|-------|
| **KPI ID** | 830 |
| **Weightage** | 5% |
| **Measure** | percentage |
| **Data Source** | Survey |
| **Frequency** | Project End |
| **Automation** | 👤 Manual |
| **Default Score** | 0 |

**📝 Description:** Efficiency

**🧮 Formula:** `Document should be uploaded on Sharepoint`

**👥 Applicability:**

- **Designation:** Project Manager

**🎯 Scoring Rules:**

| Score | Condition | Threshold | Field |
|-------|-----------|-----------|-------|
| 🟢 5 | equals | 0 | Project Forensic |
| 🟢 4 | equals | 1 | Project Forensic |
| 🟡 3 | equals | 2 | Project Forensic |
| 🟠 2 | equals | 3 | Project Forensic |
| 🔴 1 | equals | 3 | Project Forensic |

---


## 📞 Support & Contact

For questions about this Project Manager KPI documentation, please contact the Performance Management team.

---
*This document was automatically generated from Project Manager KPI specifications on July 17, 2025*
