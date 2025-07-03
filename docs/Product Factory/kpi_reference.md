# Developer KPI Reference

_Auto-generated: **do not edit by hand**_

## Legend

| Term | Meaning |
|------|---------|
| **Weightage** | Percentage share in composite score |
| **Measure** | Percentage / Count |
| **Levels** | 2 = Junior … 6 = Principal |

## Time Consumption (TFS)
Percentage of estimated time actually used to complete task(s)

- **Data Source:** TFS
- **Measure:** Percentage
- **Formula:** `(Time Consumed/Estimated Time) %`

**Weightage by Level**
| kpi_unique_name        |   1 |   2 |   3 |   4 |   5 |
|:-----------------------|----:|----:|----:|----:|----:|
| Time Consumption (TFS) | 100 |  25 |  25 |  25 |  25 |


### How "Time Consumption" Is Calculated — Clarified (TFS)

| Rule | Details | Example |
|------|---------|---------|
| **Working-day definition** | 1 business day = **8 weekday hours**. A "2 d" estimate therefore equals **16 h**. | "2 d" on the ticket -> 16 h budget |
| **Measured duration** | Elapsed time is counted **only while the task is "In Progress,"** summing weekday work-hours. | Started Tue 09:00, finished Wed 17:00 -> 16 h |
| **Within-estimate rule** | If the task finishes **on or before its target end-date,** it is treated as on-estimate—even if the logged hours exceed the nominal budget. | Budget 16 h, logged 20 h, closed Fri EOD -> **still on-estimate** |
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

---

## Number of Critical Severity Bugs (TFS)
Number of critical severity bugs reported in task(s)

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of critical severity bugs reported in task(s)`

**Weightage by Level**
| kpi_unique_name                        | 1   |   2 |   3 |   4 |   5 |
|:---------------------------------------|:----|----:|----:|----:|----:|
| Number of Critical Severity Bugs (TFS) | —   |   8 |   8 |   8 |   8 |


### How Bug-Related KPIs Are Calculated — Clarified

| Rule | Details |
|------|---------|
| **Bug Assignment** | Every reported bug must be linked to the parent task in which it was found, and the KPI impact will be assigned to that task's assignee. |
| **Feature Size** | Feature size should be categorized as BIG, MEDIUM, or SMALL in TFS. Currently, this classification is not implemented, and all features are considered MEDIUM by default. |
| **Impact Calculation** | Bug counts are aggregated per assignee based on the feature size of the parent task where the bug was discovered. |


### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Critical Bugs &le; 10 AND Feature Size = 3 |
| 4 | 2 | Critical Bugs &le; 13 AND Feature Size = 3 |
| 3 | 3 | Critical Bugs &le; 15 AND Feature Size = 3 |
| 2 | 4 | Critical Bugs &le; 20 AND Feature Size = 3 |
| 1 | 5 | Critical Bugs &gt; 20 AND Feature Size = 3 |
| 5 | 6 | Critical Bugs &le; 7 AND Feature Size = 2 |
| 4 | 7 | Critical Bugs &le; 10 AND Feature Size = 2 |
| 3 | 8 | Critical Bugs &le; 13 AND Feature Size = 2 |
| 2 | 9 | Critical Bugs &le; 15 AND Feature Size = 2 |
| 1 | 10 | Critical Bugs &gt; 15 AND Feature Size = 2 |
| 5 | 11 | Critical Bugs &le; 5 AND Feature Size = 1 |
| 4 | 12 | Critical Bugs &le; 8 AND Feature Size = 1 |
| 3 | 13 | Critical Bugs &le; 10 AND Feature Size = 1 |
| 2 | 14 | Critical Bugs &le; 13 AND Feature Size = 1 |
| 1 | 15 | Critical Bugs &gt; 13 AND Feature Size = 1 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Critical Bugs &le; 8 AND Feature Size = 3 |
| 4 | 2 | Critical Bugs &le; 11 AND Feature Size = 3 |
| 3 | 3 | Critical Bugs &le; 13 AND Feature Size = 3 |
| 2 | 4 | Critical Bugs &le; 18 AND Feature Size = 3 |
| 1 | 5 | Critical Bugs &gt; 18 AND Feature Size = 3 |
| 5 | 6 | Critical Bugs &le; 6 AND Feature Size = 2 |
| 4 | 7 | Critical Bugs &le; 8 AND Feature Size = 2 |
| 3 | 8 | Critical Bugs &le; 11 AND Feature Size = 2 |
| 2 | 9 | Critical Bugs &le; 13 AND Feature Size = 2 |
| 1 | 10 | Critical Bugs &gt; 13 AND Feature Size = 2 |
| 5 | 11 | Critical Bugs &le; 4 AND Feature Size = 1 |
| 4 | 12 | Critical Bugs &le; 6 AND Feature Size = 1 |
| 3 | 13 | Critical Bugs &le; 8 AND Feature Size = 1 |
| 2 | 14 | Critical Bugs &le; 10 AND Feature Size = 1 |
| 1 | 15 | Critical Bugs &gt; 10 AND Feature Size = 1 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Critical Bugs &le; 7 AND Feature Size = 3 |
| 4 | 2 | Critical Bugs &le; 9 AND Feature Size = 3 |
| 3 | 3 | Critical Bugs &le; 11 AND Feature Size = 3 |
| 2 | 4 | Critical Bugs &le; 15 AND Feature Size = 3 |
| 1 | 5 | Critical Bugs &gt; 15 AND Feature Size = 3 |
| 5 | 6 | Critical Bugs &le; 5 AND Feature Size = 2 |
| 4 | 7 | Critical Bugs &le; 7 AND Feature Size = 2 |
| 3 | 8 | Critical Bugs &le; 9 AND Feature Size = 2 |
| 2 | 9 | Critical Bugs &le; 11 AND Feature Size = 2 |
| 1 | 10 | Critical Bugs &gt; 11 AND Feature Size = 2 |
| 5 | 11 | Critical Bugs &le; 2 AND Feature Size = 1 |
| 4 | 12 | Critical Bugs &le; 4 AND Feature Size = 1 |
| 3 | 13 | Critical Bugs &le; 6 AND Feature Size = 1 |
| 2 | 14 | Critical Bugs &le; 8 AND Feature Size = 1 |
| 1 | 15 | Critical Bugs &gt; 8 AND Feature Size = 1 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Critical Bugs &le; 2 AND Feature Size = 3 |
| 4 | 2 | Critical Bugs &le; 4 AND Feature Size = 3 |
| 3 | 3 | Critical Bugs &le; 7 AND Feature Size = 3 |
| 2 | 4 | Critical Bugs &le; 9 AND Feature Size = 3 |
| 1 | 5 | Critical Bugs &gt; 9 AND Feature Size = 3 |
| 5 | 6 | Critical Bugs &le; 2 AND Feature Size = 2 |
| 4 | 7 | Critical Bugs &le; 3 AND Feature Size = 2 |
| 3 | 8 | Critical Bugs &le; 4 AND Feature Size = 2 |
| 2 | 9 | Critical Bugs &le; 7 AND Feature Size = 2 |
| 1 | 10 | Critical Bugs &gt; 7 AND Feature Size = 2 |
| 5 | 11 | Critical Bugs &le; 1 AND Feature Size = 1 |
| 4 | 12 | Critical Bugs &le; 2 AND Feature Size = 1 |
| 3 | 13 | Critical Bugs &le; 3 AND Feature Size = 1 |
| 2 | 14 | Critical Bugs &le; 5 AND Feature Size = 1 |
| 1 | 15 | Critical Bugs &gt; 5 AND Feature Size = 1 |

---

## Number of Medium Severity Bugs (TFS)
Number of medium severity bugs reported in task(s)

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of medium severity bugs reported in task(s)`

**Weightage by Level**
| kpi_unique_name                      | 1   |   2 |   3 |   4 |   5 |
|:-------------------------------------|:----|----:|----:|----:|----:|
| Number of Medium Severity Bugs (TFS) | —   |   4 |   4 |   4 |   4 |


### How Bug-Related KPIs Are Calculated — Clarified

| Rule | Details |
|------|---------|
| **Bug Assignment** | Every reported bug must be linked to the parent task in which it was found, and the KPI impact will be assigned to that task's assignee. |
| **Feature Size** | Feature size should be categorized as BIG, MEDIUM, or SMALL in TFS. Currently, this classification is not implemented, and all features are considered MEDIUM by default. |
| **Impact Calculation** | Bug counts are aggregated per assignee based on the feature size of the parent task where the bug was discovered. |


### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Medium Severity Bugs &le; 10 AND Feature Size = 3 |
| 4 | 2 | Medium Severity Bugs &le; 13 AND Feature Size = 3 |
| 3 | 3 | Medium Severity Bugs &le; 15 AND Feature Size = 3 |
| 2 | 4 | Medium Severity Bugs &le; 20 AND Feature Size = 3 |
| 1 | 5 | Medium Severity Bugs &gt; 20 AND Feature Size = 3 |
| 5 | 6 | Medium Severity Bugs &le; 7 AND Feature Size = 2 |
| 4 | 7 | Medium Severity Bugs &le; 10 AND Feature Size = 2 |
| 3 | 8 | Medium Severity Bugs &le; 13 AND Feature Size = 2 |
| 2 | 9 | Medium Severity Bugs &le; 15 AND Feature Size = 2 |
| 1 | 10 | Medium Severity Bugs &gt; 15 AND Feature Size = 2 |
| 5 | 11 | Medium Severity Bugs &le; 5 AND Feature Size = 1 |
| 4 | 12 | Medium Severity Bugs &le; 8 AND Feature Size = 1 |
| 3 | 13 | Medium Severity Bugs &le; 10 AND Feature Size = 1 |
| 2 | 14 | Medium Severity Bugs &le; 13 AND Feature Size = 1 |
| 1 | 15 | Medium Severity Bugs &gt; 13 AND Feature Size = 1 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Medium Severity Bugs &le; 8 AND Feature Size = 3 |
| 4 | 2 | Medium Severity Bugs &le; 11 AND Feature Size = 3 |
| 3 | 3 | Medium Severity Bugs &le; 13 AND Feature Size = 3 |
| 2 | 4 | Medium Severity Bugs &le; 18 AND Feature Size = 3 |
| 1 | 5 | Medium Severity Bugs &gt; 18 AND Feature Size = 3 |
| 5 | 6 | Medium Severity Bugs &le; 6 AND Feature Size = 2 |
| 4 | 7 | Medium Severity Bugs &le; 8 AND Feature Size = 2 |
| 3 | 8 | Medium Severity Bugs &le; 11 AND Feature Size = 2 |
| 2 | 9 | Medium Severity Bugs &le; 13 AND Feature Size = 2 |
| 1 | 10 | Medium Severity Bugs &gt; 13 AND Feature Size = 2 |
| 5 | 11 | Medium Severity Bugs &le; 4 AND Feature Size = 1 |
| 4 | 12 | Medium Severity Bugs &le; 6 AND Feature Size = 1 |
| 3 | 13 | Medium Severity Bugs &le; 8 AND Feature Size = 1 |
| 2 | 14 | Medium Severity Bugs &le; 10 AND Feature Size = 1 |
| 1 | 15 | Medium Severity Bugs &gt; 10 AND Feature Size = 1 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Medium Severity Bugs &le; 7 AND Feature Size = 3 |
| 4 | 2 | Medium Severity Bugs &le; 9 AND Feature Size = 3 |
| 3 | 3 | Medium Severity Bugs &le; 11 AND Feature Size = 3 |
| 2 | 4 | Medium Severity Bugs &le; 15 AND Feature Size = 3 |
| 1 | 5 | Medium Severity Bugs &gt; 15 AND Feature Size = 3 |
| 5 | 6 | Medium Severity Bugs &le; 5 AND Feature Size = 2 |
| 4 | 7 | Medium Severity Bugs &le; 7 AND Feature Size = 2 |
| 3 | 8 | Medium Severity Bugs &le; 9 AND Feature Size = 2 |
| 2 | 9 | Medium Severity Bugs &le; 11 AND Feature Size = 2 |
| 1 | 10 | Medium Severity Bugs &gt; 11 AND Feature Size = 2 |
| 5 | 11 | Medium Severity Bugs &le; 2 AND Feature Size = 1 |
| 4 | 12 | Medium Severity Bugs &le; 4 AND Feature Size = 1 |
| 3 | 13 | Medium Severity Bugs &le; 6 AND Feature Size = 1 |
| 2 | 14 | Medium Severity Bugs &le; 8 AND Feature Size = 1 |
| 1 | 15 | Medium Severity Bugs &gt; 8 AND Feature Size = 1 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Medium Severity Bugs &le; 2 AND Feature Size = 3 |
| 4 | 2 | Medium Severity Bugs &le; 4 AND Feature Size = 3 |
| 3 | 3 | Medium Severity Bugs &le; 7 AND Feature Size = 3 |
| 2 | 4 | Medium Severity Bugs &le; 9 AND Feature Size = 3 |
| 1 | 5 | Medium Severity Bugs &gt; 9 AND Feature Size = 3 |
| 5 | 6 | Medium Severity Bugs &le; 2 AND Feature Size = 2 |
| 4 | 7 | Medium Severity Bugs &le; 3 AND Feature Size = 2 |
| 3 | 8 | Medium Severity Bugs &le; 4 AND Feature Size = 2 |
| 2 | 9 | Medium Severity Bugs &le; 7 AND Feature Size = 2 |
| 1 | 10 | Medium Severity Bugs &gt; 7 AND Feature Size = 2 |
| 5 | 11 | Medium Severity Bugs &le; 1 AND Feature Size = 1 |
| 4 | 12 | Medium Severity Bugs &le; 2 AND Feature Size = 1 |
| 3 | 13 | Medium Severity Bugs &le; 3 AND Feature Size = 1 |
| 2 | 14 | Medium Severity Bugs &le; 5 AND Feature Size = 1 |
| 1 | 15 | Medium Severity Bugs &gt; 5 AND Feature Size = 1 |

---

## Number of Low Severity Bug (TFS)
Number of low severity bugs reported in task(s)

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of low severity bugs reported in task(s)`

**Weightage by Level**
| kpi_unique_name                  | 1   |   2 |   3 |   4 |   5 |
|:---------------------------------|:----|----:|----:|----:|----:|
| Number of Low Severity Bug (TFS) | —   |   2 |   2 |   2 |   2 |


### How Bug-Related KPIs Are Calculated — Clarified

| Rule | Details |
|------|---------|
| **Bug Assignment** | Every reported bug must be linked to the parent task in which it was found, and the KPI impact will be assigned to that task's assignee. |
| **Feature Size** | Feature size should be categorized as BIG, MEDIUM, or SMALL in TFS. Currently, this classification is not implemented, and all features are considered MEDIUM by default. |
| **Impact Calculation** | Bug counts are aggregated per assignee based on the feature size of the parent task where the bug was discovered. |


### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Low Severity Bugs &le; 10 AND Feature Size = 3 |
| 4 | 2 | Low Severity Bugs &le; 13 AND Feature Size = 3 |
| 3 | 3 | Low Severity Bugs &le; 15 AND Feature Size = 3 |
| 2 | 4 | Low Severity Bugs &le; 20 AND Feature Size = 3 |
| 1 | 5 | Low Severity Bugs &gt; 20 AND Feature Size = 3 |
| 5 | 6 | Low Severity Bugs &le; 7 AND Feature Size = 2 |
| 4 | 7 | Low Severity Bugs &le; 10 AND Feature Size = 2 |
| 3 | 8 | Low Severity Bugs &le; 13 AND Feature Size = 2 |
| 2 | 9 | Low Severity Bugs &le; 15 AND Feature Size = 2 |
| 1 | 10 | Low Severity Bugs &gt; 15 AND Feature Size = 2 |
| 5 | 11 | Low Severity Bugs &le; 5 AND Feature Size = 1 |
| 4 | 12 | Low Severity Bugs &le; 8 AND Feature Size = 1 |
| 3 | 13 | Low Severity Bugs &le; 10 AND Feature Size = 1 |
| 2 | 14 | Low Severity Bugs &le; 13 AND Feature Size = 1 |
| 1 | 15 | Low Severity Bugs &gt; 13 AND Feature Size = 1 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Low Severity Bugs &le; 8 AND Feature Size = 3 |
| 4 | 2 | Low Severity Bugs &le; 11 AND Feature Size = 3 |
| 3 | 3 | Low Severity Bugs &le; 13 AND Feature Size = 3 |
| 2 | 4 | Low Severity Bugs &le; 18 AND Feature Size = 3 |
| 1 | 5 | Low Severity Bugs &gt; 18 AND Feature Size = 3 |
| 5 | 6 | Low Severity Bugs &le; 6 AND Feature Size = 2 |
| 4 | 7 | Low Severity Bugs &le; 8 AND Feature Size = 2 |
| 3 | 8 | Low Severity Bugs &le; 11 AND Feature Size = 2 |
| 2 | 9 | Low Severity Bugs &le; 13 AND Feature Size = 2 |
| 1 | 10 | Low Severity Bugs &gt; 13 AND Feature Size = 2 |
| 5 | 11 | Low Severity Bugs &le; 4 AND Feature Size = 1 |
| 4 | 12 | Low Severity Bugs &le; 6 AND Feature Size = 1 |
| 3 | 13 | Low Severity Bugs &le; 8 AND Feature Size = 1 |
| 2 | 14 | Low Severity Bugs &le; 10 AND Feature Size = 1 |
| 1 | 15 | Low Severity Bugs &gt; 10 AND Feature Size = 1 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Low Severity Bugs &le; 7 AND Feature Size = 3 |
| 4 | 2 | Low Severity Bugs &le; 9 AND Feature Size = 3 |
| 3 | 3 | Low Severity Bugs &le; 11 AND Feature Size = 3 |
| 2 | 4 | Low Severity Bugs &le; 15 AND Feature Size = 3 |
| 1 | 5 | Low Severity Bugs &gt; 15 AND Feature Size = 3 |
| 5 | 6 | Low Severity Bugs &le; 5 AND Feature Size = 2 |
| 4 | 7 | Low Severity Bugs &le; 7 AND Feature Size = 2 |
| 3 | 8 | Low Severity Bugs &le; 9 AND Feature Size = 2 |
| 2 | 9 | Low Severity Bugs &le; 11 AND Feature Size = 2 |
| 1 | 10 | Low Severity Bugs &gt; 11 AND Feature Size = 2 |
| 5 | 11 | Low Severity Bugs &le; 2 AND Feature Size = 1 |
| 4 | 12 | Low Severity Bugs &le; 4 AND Feature Size = 1 |
| 3 | 13 | Low Severity Bugs &le; 6 AND Feature Size = 1 |
| 2 | 14 | Low Severity Bugs &le; 8 AND Feature Size = 1 |
| 1 | 15 | Low Severity Bugs &gt; 8 AND Feature Size = 1 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Low Severity Bugs &le; 2 AND Feature Size = 3 |
| 4 | 2 | Low Severity Bugs &le; 4 AND Feature Size = 3 |
| 3 | 3 | Low Severity Bugs &le; 7 AND Feature Size = 3 |
| 2 | 4 | Low Severity Bugs &le; 9 AND Feature Size = 3 |
| 1 | 5 | Low Severity Bugs &gt; 9 AND Feature Size = 3 |
| 5 | 6 | Low Severity Bugs &le; 2 AND Feature Size = 2 |
| 4 | 7 | Low Severity Bugs &le; 3 AND Feature Size = 2 |
| 3 | 8 | Low Severity Bugs &le; 4 AND Feature Size = 2 |
| 2 | 9 | Low Severity Bugs &le; 7 AND Feature Size = 2 |
| 1 | 10 | Low Severity Bugs &gt; 7 AND Feature Size = 2 |
| 5 | 11 | Low Severity Bugs &le; 1 AND Feature Size = 1 |
| 4 | 12 | Low Severity Bugs &le; 2 AND Feature Size = 1 |
| 3 | 13 | Low Severity Bugs &le; 3 AND Feature Size = 1 |
| 2 | 14 | Low Severity Bugs &le; 5 AND Feature Size = 1 |
| 1 | 15 | Low Severity Bugs &gt; 5 AND Feature Size = 1 |

---

## Number of High Severity Bugs (TFS)
Number of high severity bugs reported in task(s)

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of high severity bugs reported in task(s)`

**Weightage by Level**
| kpi_unique_name                    | 1   |   2 |   3 |   4 |   5 |
|:-----------------------------------|:----|----:|----:|----:|----:|
| Number of High Severity Bugs (TFS) | —   |   6 |   6 |   6 |   6 |


### How Bug-Related KPIs Are Calculated — Clarified

| Rule | Details |
|------|---------|
| **Bug Assignment** | Every reported bug must be linked to the parent task in which it was found, and the KPI impact will be assigned to that task's assignee. |
| **Feature Size** | Feature size should be categorized as BIG, MEDIUM, or SMALL in TFS. Currently, this classification is not implemented, and all features are considered MEDIUM by default. |
| **Impact Calculation** | Bug counts are aggregated per assignee based on the feature size of the parent task where the bug was discovered. |


### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | High Severity Bugs &le; 10 AND Feature Size = 1 |
| 4 | 2 | High Severity Bugs &le; 13 AND Feature Size = 1 |
| 3 | 3 | High Severity Bugs &le; 15 AND Feature Size = 1 |
| 2 | 4 | High Severity Bugs &le; 20 AND Feature Size = 1 |
| 1 | 5 | High Severity Bugs &gt; 20 AND Feature Size = 1 |
| 5 | 6 | High Severity Bugs &le; 7 AND Feature Size = 2 |
| 4 | 7 | High Severity Bugs &le; 10 AND Feature Size = 2 |
| 3 | 8 | High Severity Bugs &le; 13 AND Feature Size = 2 |
| 2 | 9 | High Severity Bugs &le; 15 AND Feature Size = 2 |
| 1 | 10 | High Severity Bugs &gt; 15 AND Feature Size = 2 |
| 5 | 11 | High Severity Bugs &le; 5 AND Feature Size = 1 |
| 4 | 12 | High Severity Bugs &le; 8 AND Feature Size = 1 |
| 3 | 13 | High Severity Bugs &le; 10 AND Feature Size = 1 |
| 2 | 14 | High Severity Bugs &le; 13 AND Feature Size = 1 |
| 1 | 15 | High Severity Bugs &gt; 13 AND Feature Size = 1 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | High Severity Bugs &le; 8 AND Feature Size = 1 |
| 4 | 2 | High Severity Bugs &le; 11 AND Feature Size = 1 |
| 3 | 3 | High Severity Bugs &le; 13 AND Feature Size = 1 |
| 2 | 4 | High Severity Bugs &le; 18 AND Feature Size = 1 |
| 1 | 5 | High Severity Bugs &gt; 18 AND Feature Size = 1 |
| 5 | 6 | High Severity Bugs &le; 6 AND Feature Size = 2 |
| 4 | 7 | High Severity Bugs &le; 8 AND Feature Size = 2 |
| 3 | 8 | High Severity Bugs &le; 11 AND Feature Size = 2 |
| 2 | 9 | High Severity Bugs &le; 13 AND Feature Size = 2 |
| 1 | 10 | High Severity Bugs &gt; 13 AND Feature Size = 2 |
| 5 | 11 | High Severity Bugs &le; 4 AND Feature Size = 1 |
| 4 | 12 | High Severity Bugs &le; 6 AND Feature Size = 1 |
| 3 | 13 | High Severity Bugs &le; 8 AND Feature Size = 1 |
| 2 | 14 | High Severity Bugs &le; 10 AND Feature Size = 1 |
| 1 | 15 | High Severity Bugs &gt; 10 AND Feature Size = 1 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | High Severity Bugs &le; 7 AND Feature Size = 1 |
| 4 | 2 | High Severity Bugs &le; 9 AND Feature Size = 1 |
| 3 | 3 | High Severity Bugs &le; 11 AND Feature Size = 1 |
| 2 | 4 | High Severity Bugs &le; 15 AND Feature Size = 1 |
| 1 | 5 | High Severity Bugs &gt; 15 AND Feature Size = 1 |
| 5 | 6 | High Severity Bugs &le; 5 AND Feature Size = 2 |
| 4 | 7 | High Severity Bugs &le; 7 AND Feature Size = 2 |
| 3 | 8 | High Severity Bugs &le; 9 AND Feature Size = 2 |
| 2 | 9 | High Severity Bugs &le; 11 AND Feature Size = 2 |
| 1 | 10 | High Severity Bugs &gt; 11 AND Feature Size = 2 |
| 5 | 11 | High Severity Bugs &le; 2 AND Feature Size = 1 |
| 4 | 12 | High Severity Bugs &le; 4 AND Feature Size = 1 |
| 3 | 13 | High Severity Bugs &le; 6 AND Feature Size = 1 |
| 2 | 14 | High Severity Bugs &le; 8 AND Feature Size = 1 |
| 1 | 15 | High Severity Bugs &gt; 8 AND Feature Size = 1 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | High Severity Bugs &le; 2 AND Feature Size = 1 |
| 4 | 2 | High Severity Bugs &le; 4 AND Feature Size = 1 |
| 3 | 3 | High Severity Bugs &le; 7 AND Feature Size = 1 |
| 2 | 4 | High Severity Bugs &le; 9 AND Feature Size = 1 |
| 1 | 5 | High Severity Bugs &gt; 9 AND Feature Size = 1 |
| 5 | 6 | High Severity Bugs &le; 2 AND Feature Size = 2 |
| 4 | 7 | High Severity Bugs &le; 3 AND Feature Size = 2 |
| 3 | 8 | High Severity Bugs &le; 4 AND Feature Size = 2 |
| 2 | 9 | High Severity Bugs &le; 7 AND Feature Size = 2 |
| 1 | 10 | High Severity Bugs &gt; 7 AND Feature Size = 2 |
| 5 | 11 | High Severity Bugs &le; 1 AND Feature Size = 1 |
| 4 | 12 | High Severity Bugs &le; 2 AND Feature Size = 1 |
| 3 | 13 | High Severity Bugs &le; 3 AND Feature Size = 1 |
| 2 | 14 | High Severity Bugs &le; 5 AND Feature Size = 1 |
| 1 | 15 | High Severity Bugs &gt; 5 AND Feature Size = 1 |

---

## Code Review Comments (TFS)
Number of comments by reviewer on pull request(s)

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of comments by reviewer on pull request(s)`

**Weightage by Level**
| kpi_unique_name            | 1   |   2 |   3 |   4 |   5 |
|:---------------------------|:----|----:|----:|----:|----:|
| Code Review Comments (TFS) | —   |  15 |  15 |  15 |  15 |

### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Pull Request Reviewer Comments Count &le; 7 AND Feature Size = 3 |
| 4 | 2 | Pull Request Reviewer Comments Count &le; 10 AND Feature Size = 3 |
| 3 | 3 | Pull Request Reviewer Comments Count &le; 13 AND Feature Size = 3 |
| 2 | 4 | Pull Request Reviewer Comments Count &le; 15 AND Feature Size = 3 |
| 1 | 5 | Pull Request Reviewer Comments Count &gt; 15 AND Feature Size = 3 |
| 5 | 6 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 2 |
| 4 | 7 | Pull Request Reviewer Comments Count &le; 7 AND Feature Size = 2 |
| 3 | 8 | Pull Request Reviewer Comments Count &le; 10 AND Feature Size = 2 |
| 2 | 9 | Pull Request Reviewer Comments Count &le; 13 AND Feature Size = 2 |
| 1 | 10 | Pull Request Reviewer Comments Count &gt; 13 AND Feature Size = 2 |
| 5 | 11 | Pull Request Reviewer Comments Count &le; 3 AND Feature Size = 1 |
| 4 | 12 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 1 |
| 3 | 13 | Pull Request Reviewer Comments Count &le; 7 AND Feature Size = 1 |
| 2 | 14 | Pull Request Reviewer Comments Count &le; 10 AND Feature Size = 1 |
| 1 | 15 | Pull Request Reviewer Comments Count &gt; 10 AND Feature Size = 1 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 3 |
| 4 | 2 | Pull Request Reviewer Comments Count &le; 7 AND Feature Size = 3 |
| 3 | 3 | Pull Request Reviewer Comments Count &le; 10 AND Feature Size = 3 |
| 2 | 4 | Pull Request Reviewer Comments Count &le; 13 AND Feature Size = 3 |
| 1 | 5 | Pull Request Reviewer Comments Count &gt; 13 AND Feature Size = 3 |
| 5 | 6 | Pull Request Reviewer Comments Count &le; 4 AND Feature Size = 2 |
| 4 | 7 | Pull Request Reviewer Comments Count &le; 6 AND Feature Size = 2 |
| 3 | 8 | Pull Request Reviewer Comments Count &le; 9 AND Feature Size = 2 |
| 2 | 9 | Pull Request Reviewer Comments Count &le; 11 AND Feature Size = 2 |
| 1 | 10 | Pull Request Reviewer Comments Count &gt; 11 AND Feature Size = 2 |
| 5 | 11 | Pull Request Reviewer Comments Count &le; 3 AND Feature Size = 1 |
| 4 | 12 | Pull Request Reviewer Comments Count &le; 4 AND Feature Size = 1 |
| 3 | 13 | Pull Request Reviewer Comments Count &le; 6 AND Feature Size = 1 |
| 2 | 14 | Pull Request Reviewer Comments Count &le; 8 AND Feature Size = 1 |
| 1 | 15 | Pull Request Reviewer Comments Count &gt; 8 AND Feature Size = 1 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Pull Request Reviewer Comments Count &le; 3 AND Feature Size = 3 |
| 4 | 2 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 3 |
| 3 | 3 | Pull Request Reviewer Comments Count &le; 9 AND Feature Size = 3 |
| 2 | 4 | Pull Request Reviewer Comments Count &le; 11 AND Feature Size = 3 |
| 1 | 5 | Pull Request Reviewer Comments Count &gt; 11 AND Feature Size = 3 |
| 5 | 6 | Pull Request Reviewer Comments Count &le; 2 AND Feature Size = 2 |
| 4 | 7 | Pull Request Reviewer Comments Count &le; 4 AND Feature Size = 2 |
| 3 | 8 | Pull Request Reviewer Comments Count &le; 6 AND Feature Size = 2 |
| 2 | 9 | Pull Request Reviewer Comments Count &le; 8 AND Feature Size = 2 |
| 1 | 10 | Pull Request Reviewer Comments Count &gt; 8 AND Feature Size = 2 |
| 5 | 11 | Pull Request Reviewer Comments Count &le; 1 AND Feature Size = 1 |
| 4 | 12 | Pull Request Reviewer Comments Count &le; 2 AND Feature Size = 1 |
| 3 | 13 | Pull Request Reviewer Comments Count &le; 4 AND Feature Size = 1 |
| 2 | 14 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 1 |
| 1 | 15 | Pull Request Reviewer Comments Count &gt; 5 AND Feature Size = 1 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 | Pull Request Reviewer Comments Count &le; 2 AND Feature Size = 3 |
| 4 | 2 | Pull Request Reviewer Comments Count &le; 3 AND Feature Size = 3 |
| 3 | 3 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 3 |
| 2 | 4 | Pull Request Reviewer Comments Count &le; 8 AND Feature Size = 3 |
| 1 | 5 | Pull Request Reviewer Comments Count &gt; 8 AND Feature Size = 3 |
| 5 | 6 | Pull Request Reviewer Comments Count &le; 1 AND Feature Size = 2 |
| 4 | 7 | Pull Request Reviewer Comments Count &le; 3 AND Feature Size = 2 |
| 3 | 8 | Pull Request Reviewer Comments Count &le; 5 AND Feature Size = 2 |
| 2 | 9 | Pull Request Reviewer Comments Count &le; 7 AND Feature Size = 2 |
| 1 | 10 | Pull Request Reviewer Comments Count &gt; 7 AND Feature Size = 2 |
| 5 | 11 | Pull Request Reviewer Comments Count &le; 0 AND Feature Size = 1 |
| 4 | 12 | Pull Request Reviewer Comments Count &le; 2 AND Feature Size = 1 |
| 3 | 13 | Pull Request Reviewer Comments Count &le; 3 AND Feature Size = 1 |
| 2 | 14 | Pull Request Reviewer Comments Count &le; 4 AND Feature Size = 1 |
| 1 | 15 | Pull Request Reviewer Comments Count &gt; 4 AND Feature Size = 1 |

---

## SonarQube Comments (TFS)
Number of comments by SonarQube on pull request(s)

- **Data Source:** TFS
- **Measure:** Count
- **Formula:** `Number of comments by SonarQube on pull request(s)`

**Weightage by Level**
| kpi_unique_name          | 1   |   2 |   3 |   4 |   5 |
|:-------------------------|:----|----:|----:|----:|----:|
| SonarQube Comments (TFS) | —   |  15 |  15 |  15 |  15 |

### Level 2 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 3 |
| 4 | 2 |  SonarQube Comments Count on Pull Request &le; 10 AND Feature Size = 3 |
| 3 | 3 |  SonarQube Comments Count on Pull Request &le; 13 AND Feature Size = 3 |
| 2 | 4 |  SonarQube Comments Count on Pull Request &le; 15 AND Feature Size = 3 |
| 1 | 5 |  SonarQube Comments Count on Pull Request &gt; 15 AND Feature Size = 3 |
| 5 | 6 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 2 |
| 4 | 7 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 2 |
| 3 | 8 |  SonarQube Comments Count on Pull Request &le; 10 AND Feature Size = 2 |
| 2 | 9 |  SonarQube Comments Count on Pull Request &le; 13 AND Feature Size = 2 |
| 1 | 10 |  SonarQube Comments Count on Pull Request &gt; 13 AND Feature Size = 2 |
| 5 | 11 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 1 |
| 4 | 12 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 1 |
| 3 | 13 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 1 |
| 2 | 14 |  SonarQube Comments Count on Pull Request &le; 10 AND Feature Size = 1 |
| 1 | 15 |  SonarQube Comments Count on Pull Request &gt; 10 AND Feature Size = 1 |

### Level 3 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 |  SonarQube Comments Count on Pull Request &le; 4 AND Feature Size = 3 |
| 4 | 2 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 3 |
| 3 | 3 |  SonarQube Comments Count on Pull Request &le; 8 AND Feature Size = 3 |
| 2 | 4 |  SonarQube Comments Count on Pull Request &le; 11 AND Feature Size = 3 |
| 1 | 5 |  SonarQube Comments Count on Pull Request &gt; 11 AND Feature Size = 3 |
| 5 | 6 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 2 |
| 4 | 7 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 2 |
| 3 | 8 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 2 |
| 2 | 9 |  SonarQube Comments Count on Pull Request &le; 10 AND Feature Size = 2 |
| 1 | 10 |  SonarQube Comments Count on Pull Request &gt; 10 AND Feature Size = 2 |
| 5 | 11 |  SonarQube Comments Count on Pull Request &le; 2 AND Feature Size = 1 |
| 4 | 12 |  SonarQube Comments Count on Pull Request &le; 4 AND Feature Size = 1 |
| 3 | 13 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 1 |
| 2 | 14 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 1 |
| 1 | 15 |  SonarQube Comments Count on Pull Request &gt; 7 AND Feature Size = 1 |

### Level 4 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 3 |
| 4 | 2 |  SonarQube Comments Count on Pull Request &le; 4 AND Feature Size = 3 |
| 3 | 3 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 3 |
| 2 | 4 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 3 |
| 1 | 5 |  SonarQube Comments Count on Pull Request &gt; 7 AND Feature Size = 3 |
| 5 | 6 |  SonarQube Comments Count on Pull Request &le; 2 AND Feature Size = 2 |
| 4 | 7 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 2 |
| 3 | 8 |  SonarQube Comments Count on Pull Request &le; 4 AND Feature Size = 2 |
| 2 | 9 |  SonarQube Comments Count on Pull Request &le; 6 AND Feature Size = 2 |
| 1 | 10 |  SonarQube Comments Count on Pull Request &gt; 6 AND Feature Size = 2 |
| 5 | 11 |  SonarQube Comments Count on Pull Request &le; 0 AND Feature Size = 1 |
| 4 | 12 |  SonarQube Comments Count on Pull Request &le; 2 AND Feature Size = 1 |
| 3 | 13 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 1 |
| 2 | 14 |  SonarQube Comments Count on Pull Request &le; 4 AND Feature Size = 1 |
| 1 | 15 |  SonarQube Comments Count on Pull Request &gt; 4 AND Feature Size = 1 |

### Level 5 Scoring Rules

| Score | Rule ID | Conditions |
|-------|---------|------------|
| 5 | 1 |  SonarQube Comments Count on Pull Request &le; 2 AND Feature Size = 3 |
| 4 | 2 |  SonarQube Comments Count on Pull Request &le; 4 AND Feature Size = 3 |
| 3 | 3 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 3 |
| 2 | 4 |  SonarQube Comments Count on Pull Request &le; 7 AND Feature Size = 3 |
| 1 | 5 |  SonarQube Comments Count on Pull Request &gt; 7 AND Feature Size = 3 |
| 5 | 6 |  SonarQube Comments Count on Pull Request &le; 1 AND Feature Size = 2 |
| 4 | 7 |  SonarQube Comments Count on Pull Request &le; 2 AND Feature Size = 2 |
| 3 | 8 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 2 |
| 2 | 9 |  SonarQube Comments Count on Pull Request &le; 5 AND Feature Size = 2 |
| 1 | 10 |  SonarQube Comments Count on Pull Request &gt; 5 AND Feature Size = 2 |
| 5 | 11 |  SonarQube Comments Count on Pull Request &le; 0 AND Feature Size = 1 |
| 4 | 12 |  SonarQube Comments Count on Pull Request &le; 1 AND Feature Size = 1 |
| 3 | 13 |  SonarQube Comments Count on Pull Request &le; 2 AND Feature Size = 1 |
| 2 | 14 |  SonarQube Comments Count on Pull Request &le; 3 AND Feature Size = 1 |
| 1 | 15 |  SonarQube Comments Count on Pull Request &gt; 3 AND Feature Size = 1 |

---

## Time Consumption (JIRA)
Percentage of estimated time actually used to complete task(s)

- **Data Source:** JIRA
- **Measure:** Percentage
- **Formula:** `(Time Consumed/Estimated Time) %`

**Weightage by Level**
| kpi_unique_name         | 1   |   2 |   3 |   4 |   5 |
|:------------------------|:----|----:|----:|----:|----:|
| Time Consumption (JIRA) | —   |  25 |  25 |  25 |  25 |


### How "Time Consumption" Is Calculated — Clarified (JIRA)

| Rule | Details | Example |
|------|---------|---------|
| **Time Measurement** | Time taken is measured against the SLA (Service Level Agreement) for the task. | Task SLA: 2 days, actual time: 3 days -> overrun |
| **Assignee Impact** | Currently, only the **last assignee** of a task is affected by time consumption metrics. | Task reassigned from Dev A to Dev B -> only Dev B's KPI is impacted |
| **Future Enhancement** | The system will be updated to track time consumption for **all assignees** who worked on the task, proportional to their involvement. | *Pending implementation* |
| **SLA Calculation** | Time consumption percentage is calculated as: (Actual Time / SLA Time) × 100% | SLA: 16h, Actual: 20h -> 125% time consumption |


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

---
