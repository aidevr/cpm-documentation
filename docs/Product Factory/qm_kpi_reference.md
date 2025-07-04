# QA KPI Reference

_Auto-generated: **do not edit by hand**_

## Legend

| Term | Meaning |
|------|---------|
| **Weightage** | Percentage share in composite score |
| **Measure** | Percentage / Count |
| **Levels** | 1 = QA Trainee … 6 = QA Principal |
| **Automated** | KPI calculated automatically from data sources |

## Time Consumption (TFS)
Percentage of estimated time actually used to complete task(s)

- **Data Source:** TFS
- **Measure:** Percentage
- **Formula:** `(Time Consumed/Estimated Time) %`
- **Automated:** ✅ Yes

**Weightage by Level**
| kpi_unique_name        |   1 |   2 |   3 |   4 |   5 |   6 |
|:-----------------------|----:|----:|----:|----:|----:|----:|
| Time Consumption (TFS) | 100 |  25 |  15 |  20 |  15 |  10 |


### How "Time Consumption" Is Calculated — QA Specific

| Rule | Details | Example |
|------|---------|---------|
| **Working-day definition** | 1 business day = **8 weekday hours**. A "2 d" estimate therefore equals **16 h**. | "2 d" on the ticket -> 16 h budget |
| **Measured duration** | Elapsed time is counted **only while the task is "In Progress,"** summing weekday work-hours. | Started Tue 09:00, finished Wed 17:00 -> 16 h |
| **QA Task Tracking** | Time is tracked specifically for QA testing activities including test case execution, bug verification, and UAT support. | QA testing phase: 24h estimated, 30h actual -> 125% consumption |
| **Weekend handling** | Saturdays & Sundays are **ignored** when measuring schedule overruns. | Due Fri, closed Mon -> overrun = **1 business day** (8 h), *not* 3 calendar days |


### Level 1 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Time Consumed &le; 90 |
| 4 | 2 | Time Consumed &le; 100 |
| 3 | 3 | Time Consumed &le; 125 |
| 2 | 4 | Time Consumed &le; 150 |
| 1 | 5 | Time Consumed &gt; 150 |

### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Time Consumed &le; 75 |
| 4 | 2 | Time Consumed &le; 90 |
| 3 | 3 | Time Consumed &le; 100 |
| 2 | 4 | Time Consumed &le; 125 |
| 1 | 5 | Time Consumed &gt; 125 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Time Consumed &le; 75 |
| 4 | 2 | Time Consumed &le; 90 |
| 3 | 3 | Time Consumed &le; 100 |
| 2 | 4 | Time Consumed &le; 125 |
| 1 | 5 | Time Consumed &gt; 125 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Time Consumed &le; 75 |
| 4 | 2 | Time Consumed &le; 90 |
| 3 | 3 | Time Consumed &le; 100 |
| 2 | 4 | Time Consumed &le; 125 |
| 1 | 5 | Time Consumed &gt; 125 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Time Consumed &le; 75 |
| 4 | 2 | Time Consumed &le; 90 |
| 3 | 3 | Time Consumed &le; 100 |
| 2 | 4 | Time Consumed &le; 125 |
| 1 | 5 | Time Consumed &gt; 125 |

### Level 6 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Time Consumed &le; 75 |
| 4 | 2 | Time Consumed &le; 90 |
| 3 | 3 | Time Consumed &le; 100 |
| 2 | 4 | Time Consumed &le; 125 |
| 1 | 5 | Time Consumed &gt; 125 |

---

## Defect Density (JIRA)
The number of defects reported in SIT/UAT/Production

- **Data Source:** JIRA
- **Measure:** Count
- **Formula:** `The number of defects reported in SIT/UAT/Production`
- **Automated:** ✅ Yes

**Weightage by Level**
| kpi_unique_name       | 1   |   2 |   3 |   4 |   5 |   6 |
|:----------------------|:----|----:|----:|----:|----:|----:|
| Defect Density (JIRA) | —   |  25 |  25 |  20 |  20 |  15 |


### How "Defect Density" Is Calculated — Module Mapping

When an issue is reported in Jira, the "Module" field must be filled in.

This Module value will be used to search and match relevant TFS tasks (based on the module field) that were completed for QA in the past 6 months.

This mapping helps determine the number of defects per module relative to the QA effort.

| Rule | Details |
|------|---------|
| **Module Mapping** | Jira defect module field is matched against TFS task modules to identify QA scope |
| **Time Window** | Only TFS tasks completed in the past 6 months are considered for defect density calculation |
| **Calculation** | Defect Density = Number of defects in module / QA tasks completed for that module |
| **Defect Types** | Includes defects found in SIT, UAT, and Production environments |


### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of defects &le; 0 |
| 4 | 2 | Number of defects &lt; 2 |
| 3 | 3 | Number of defects &lt; 3 |
| 2 | 4 | Number of defects &lt; 4 |
| 1 | 5 | Number of defects &ge; 4 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of defects &le; 0 |
| 4 | 2 | Number of defects &lt; 2 |
| 3 | 3 | Number of defects &lt; 3 |
| 2 | 4 | Number of defects &lt; 4 |
| 1 | 5 | Number of defects &ge; 4 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of defects &le; 0 |
| 4 | 2 | Number of defects &lt; 2 |
| 3 | 3 | Number of defects &lt; 3 |
| 2 | 4 | Number of defects &lt; 4 |
| 1 | 5 | Number of defects &ge; 4 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of defects &le; 0 |
| 4 | 2 | Number of defects &lt; 2 |
| 3 | 3 | Number of defects &lt; 3 |
| 2 | 4 | Number of defects &lt; 4 |
| 1 | 5 | Number of defects &ge; 4 |

### Level 6 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of defects &le; 0 |
| 4 | 2 | Number of defects &lt; 2 |
| 3 | 3 | Number of defects &lt; 3 |
| 2 | 4 | Number of defects &lt; 4 |
| 1 | 5 | Number of defects &ge; 4 |

---

## Quality of automated test cases (TFS)
Number of missed test cases

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of comments by QA against each test case = Number of missed cases`
- **Automated:** ✅ Yes

**Weightage by Level**
| kpi_unique_name                       | 1   |   2 |   3 |   4 |   5 |   6 |
|:--------------------------------------|:----|----:|----:|----:|----:|----:|
| Quality of automated test cases (TFS) | —   |  25 |  25 |  20 |  15 |  15 |


### How "Quality of Automated Test Cases" Is Calculated

| Rule | Details |
|------|---------|
| **Missed Cases Identification** | Each comment by QA against a test case indicates a missed scenario or inadequate coverage |
| **Comment Count** | Number of  Comments = missed test cases |
| **Scoring Impact** | Higher number of missed cases results in lower quality scores |

### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of missed test cases = 0 |
| 4 | 2 | Number of missed test cases &le; 3 |
| 3 | 3 | Number of missed test cases &le; 5 |
| 2 | 4 | Number of missed test cases &le; 7 |
| 1 | 5 | Number of missed test cases &gt; 7 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of missed test cases = 0 |
| 4 | 2 | Number of missed test cases &le; 3 |
| 3 | 3 | Number of missed test cases &le; 5 |
| 2 | 4 | Number of missed test cases &le; 7 |
| 1 | 5 | Number of missed test cases &gt; 7 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of missed test cases = 0 |
| 4 | 2 | Number of missed test cases &le; 3 |
| 3 | 3 | Number of missed test cases &le; 5 |
| 2 | 4 | Number of missed test cases &le; 7 |
| 1 | 5 | Number of missed test cases &gt; 7 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of missed test cases = 0 |
| 4 | 2 | Number of missed test cases &le; 3 |
| 3 | 3 | Number of missed test cases &le; 5 |
| 2 | 4 | Number of missed test cases &le; 7 |
| 1 | 5 | Number of missed test cases &gt; 7 |

### Level 6 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of missed test cases = 0 |
| 4 | 2 | Number of missed test cases &le; 3 |
| 3 | 3 | Number of missed test cases &le; 5 |
| 2 | 4 | Number of missed test cases &le; 7 |
| 1 | 5 | Number of missed test cases &gt; 7 |

---

## Production Support (JIRA)
Number of production breached tickets

- **Data Source:** JIRA
- **Measure:** Count
- **Formula:** `Number of production breached tickets`
- **Automated:** ✅ Yes

**Weightage by Level**
| kpi_unique_name           | 1   |   2 |   3 |   4 |   5 |   6 |
|:--------------------------|:----|----:|----:|----:|----:|----:|
| Production Support (JIRA) | —   |  25 |  25 |  20 |  20 |  10 |


### How This Automated KPI Is Calculated

This KPI is automatically calculated based on data collected from the specified data source. The calculation follows the formula provided and is updated according to the specified frequency.

| Aspect | Details |
|--------|---------|
| **Data Collection** | Automated data extraction from the specified source system |
| **Calculation Frequency** | Performed according to the frequency specified in the KPI definition |
| **Score Assignment** | Automatically assigned based on the scoring rules defined for each level |



### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of breached tickets = 0 |
| 4 | 2 | Number of breached tickets &le; 2 |
| 3 | 3 | Number of breached tickets &le; 3 |
| 2 | 4 | Number of breached tickets &le; 5 |
| 1 | 5 | Number of breached tickets &gt; 5 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of breached tickets = 0 |
| 4 | 2 | Number of breached tickets &le; 2 |
| 3 | 3 | Number of breached tickets &le; 3 |
| 2 | 4 | Number of breached tickets &le; 5 |
| 1 | 5 | Number of breached tickets &gt; 5 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of breached tickets = 0 |
| 4 | 2 | Number of breached tickets &le; 2 |
| 3 | 3 | Number of breached tickets &le; 3 |
| 2 | 4 | Number of breached tickets &le; 5 |
| 1 | 5 | Number of breached tickets &gt; 5 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of breached tickets = 0 |
| 4 | 2 | Number of breached tickets &le; 2 |
| 3 | 3 | Number of breached tickets &le; 3 |
| 2 | 4 | Number of breached tickets &le; 5 |
| 1 | 5 | Number of breached tickets &gt; 5 |

### Level 6 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Number of breached tickets = 0 |
| 4 | 2 | Number of breached tickets &le; 2 |
| 3 | 3 | Number of breached tickets &le; 3 |
| 2 | 4 | Number of breached tickets &le; 5 |
| 1 | 5 | Number of breached tickets &gt; 5 |

---

## Test Automation Coverage (TFS)
Measures the percentage of code covered by tests to ensure reliability and reduce defects.

- **Data Source:** TFS
- **Measure:** Percentage
- **Formula:** `Measures the percentage of code covered by tests`
- **Automated:** ❌ No

**Weightage by Level**
| kpi_unique_name                | 1   | 2   |   3 |   4 |   5 |   6 |
|:-------------------------------|:----|:----|----:|----:|----:|----:|
| Test Automation Coverage (TFS) | —   | —   |  10 |  10 |  20 |  25 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Test Coverage &le; 25 |
| 2 | 2 | Test Coverage &le; 50 |
| 3 | 3 | Test Coverage &le; 75 |
| 4 | 4 | Test Coverage &le; 90 |
| 5 | 5 | Test Coverage &gt; 90 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Test Coverage &le; 25 |
| 2 | 2 | Test Coverage &le; 50 |
| 3 | 3 | Test Coverage &le; 75 |
| 4 | 4 | Test Coverage &le; 90 |
| 5 | 5 | Test Coverage &gt; 90 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Test Coverage &le; 25 |
| 2 | 2 | Test Coverage &le; 50 |
| 3 | 3 | Test Coverage &le; 75 |
| 4 | 4 | Test Coverage &le; 90 |
| 5 | 5 | Test Coverage &gt; 90 |

### Level 6 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Test Coverage &le; 25 |
| 2 | 2 | Test Coverage &le; 50 |
| 3 | 3 | Test Coverage &le; 75 |
| 4 | 4 | Test Coverage &le; 90 |
| 5 | 5 | Test Coverage &gt; 90 |

---

## Resource Utilization (TFS)
Indicates the efficiency of resource allocation and usage over time

- **Data Source:** TFS
- **Measure:** Percentage
- **Formula:** `Indicates the efficiency of resource allocation and usage over time`
- **Automated:** ❌ No

**Weightage by Level**
| kpi_unique_name            | 1   | 2   | 3   |   4 | 5   | 6   |
|:---------------------------|:----|:----|:----|----:|:----|:----|
| Resource Utilization (TFS) | —   | —   | —   |  10 | —   | —   |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Resource Utilization &le; 25 |
| 2 | 2 | Resource Utilization &le; 50 |
| 3 | 3 | Resource Utilization &le; 75 |
| 4 | 4 | Resource Utilization &le; 90 |
| 5 | 5 | Resource Utilization &gt; 90 |

---

## Reviewed Requirements (TFS)
Fill QA Related section in SDD

- **Data Source:** TFS
- **Measure:** Percentage
- **Formula:** `Fill QA Related section in SDD`
- **Automated:** ❌ No

**Weightage by Level**
| kpi_unique_name             | 1   | 2   | 3   | 4   |   5 | 6   |
|:----------------------------|:----|:----|:----|:----|----:|:----|
| Reviewed Requirements (TFS) | —   | —   | —   | —   |  10 | —   |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Reviewed Requirements &le; 25 |
| 2 | 2 | Reviewed Requirements &le; 50 |
| 3 | 3 | Reviewed Requirements &le; 75 |
| 4 | 4 | Reviewed Requirements &le; 90 |
| 5 | 5 | Reviewed Requirements &gt; 90 |

---

## Test Strategy (TFS)
Alignment of strategy with business goals

- **Data Source:** TFS
- **Measure:** Percentage
- **Formula:** `Alignment of strategy with business goals`
- **Automated:** ❌ No

**Weightage by Level**
| kpi_unique_name     | 1   | 2   | 3   | 4   | 5   |   6 |
|:--------------------|:----|:----|:----|:----|:----|----:|
| Test Strategy (TFS) | —   | —   | —   | —   | —   |  25 |

### Level 6 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 1 | 1 | Test Strategy &le; 25 |
| 2 | 2 | Test Strategy &le; 50 |
| 3 | 3 | Test Strategy &le; 75 |
| 4 | 4 | Test Strategy &le; 90 |
| 5 | 5 | Test Strategy &gt; 90 |

---
