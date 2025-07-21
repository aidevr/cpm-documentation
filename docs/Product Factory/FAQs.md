# Product Factory: Frequently Asked Questions (FAQ)


### 1. How is the score calculated, and how often is it updated?  
The score is **refreshed once every day**. During the nightly run, the system pulls the latest data from **JIRA** and **TFS** and recalculates every KPI. Only tasks or tickets that are marked **Done / Closed** are included—anything still “In Progress” is ignored until completion.

---

### 2. Can you give an example of a KPI calculation?  
**KPI:** **Time Consumption** (Weight = 25 %)

| Step | Value |
|------|-------|
| Original estimate | 2 days (16 working hours) |
| Actual time logged | 20 working hours |
| Finish date vs. target | Finished on time |

**Formula**

```
(Time Consumed ÷ Estimated Time) × 100 %  
= 20 h ÷ 16 h = 125 %
```

**Scoring Rule**

```
If Time Consumed ≤ 125 % → Score 2
```

Result: The task earns **2 points** for this KPI.

---

### 3. How is the total monthly score calculated?  
For each KPI:  

```
Weighted Score = KPI Score × KPI Weightage (%) ÷ 100
```  

Add all weighted scores for the month to get the **composite score**.

---

### 4. What is the “average KPI”?  
It is the **six-month rolling average** of monthly composite scores:  

* **Cycle 1:** January – June  
* **Cycle 2:** July – December  

A new cycle starts every July and January.

---

### 5. What happens if my supervisor changes KPI weightage or scoring rules mid-month?  
Because scores are recalculated **daily**, any new rules or weightages take effect **immediately for the current month**. Previous months remain locked and are **not retro-adjusted**.

---

### 6. What is “Rank”?  
Your **rank** is your position within your department based on the average KPI score not including the current month.  
*Example: Rank 3 of 27 in Product Development.*

---

### 7. Can an entirely new KPI be added dynamically?  
No. Adding or removing a KPI requires a **development change** and redeployment of the scoring engine.

---

### 8. How can I report an issue with my score?  
1. **Discuss the discrepancy with your supervisor.**  
2. **If confirmed, open a JIRA ticket** in POL and attach supporting evidence (task IDs, screenshots).

---

### 9. Why don’t some of my tasks or tickets appear in the score?  
Only items that are **marked Done / Closed before the nightly refresh** are scored.  
Open or in-progress work will appear once completed.

---
### 10. How is data fetched from TFS?

**TFS → Kafka → Elasticsearch** pipeline  

1. **Service Hooks in TFS**  
   * TFS WebHooks are configured for the following event types:  
     - `workitem.updated`  
     - `git.pullrequest.created`, `git.pullrequest.updated`, `git.pullrequest.merged`  
     - `build.complete` (for SonarQube artifacts)  
2. **Event Enrichment**  
   * Each WebHook POST lands on an internal API that normalises field names (e.g., `System.AssignedTo` → `assignee`).  
3. **Kafka Topics**  
   * Events are published to Kafka in topic families
   
4. **Stream Processing**  
   * ksqlDB jobs join and filter the streams, then push JSON docs to an **Elasticsearch** index called `task_insights_index`.  
5. **Nightly KPI Job**  
   * A scheduled job (02:00 PKT) queries Elasticsearch + JIRA REST, recalculates KPIs, and writes daily snapshots to Postgres for reporting.

The entire path is **append-only**; historical events are never mutated, ensuring traceability.

---

### 11. Why does the same KPI have different weightages at each level?

The KPI framework is designed to emphasise different growth areas:

| Level | Focus | Example |
|-------|-------|---------|
| **2 – 3** | Core execution skills | Time Consumption, Code Review Comments have **25 % / 15 %** weight to build good habits. |
| **4 – 5** | Quality & mentorship | Bug-related KPIs weigh more; Time Consumption weight tapers. |
| **6** | Strategic contribution | Custom architecture or leadership KPIs replace some operational ones (not shown in excerpt). |


---

### 12. What if my task spans multiple sprints?

A task’s KPIs are recorded **once, on the day it is closed.**  
Intermediate sprint boundaries have no impact; only the final completion date and logged work are evaluated. A different KPI should be created/requested by HOD to track spill overs.

---


### 13. How can I validate the raw numbers?

1. Copy the **Task ID / PR ID / Jira Ticket ID**.  

2. Verify it matches what you see in TFS or JIRA.

Discrepancies should be raised via the normal JIRA support flow 

---

### 14. My JIRA/TFS username looks wrong—what should I do?  

First, verify that the username shown in **JIRA** and **TFS** matches the one returned by the Company Active Directory (AD).  
If they differ, notify your **supervisor** and request an update of your JIRA/TFS username in the **CPM system** so future KPI pulls map correctly.

---

### 15. How do we track tasks put **On Hold**?  
When a TFS task is paused:

1. **Change the task status to "On Hold".**  
2. **System records Hold-Start and Hold-End dates.**  

Hold time will be excluded from all cycle-time KPIs. Currently, the hold status is required to be added in the system and the system will handle the hold state accordingly.

---

### 16. What happens if a JIRA issue has multiple **Level-3** assignees?  
The KPI engine will soon credit **all** L3 assignees—not just the most recent one.  
This is scheduled as an enhancement before August 2025.  
Currently, the last assignee to work on it will be impacted. 

---

### 17. Is an **Original Estimate** mandatory?  
Yes. Every task must have an **Original Estimate** at creation time.  
Blank estimates will impact Time Consumption KPI adversely.

---

### 18. How are **work-item assignee changes** handled in TFS?  
An enhancement—subject to discussion and approval with the Heads of Department—will capture work-item assignment events so all interim assignees receive credit. Until that feature is released, KPI impact is applied only to the assignee recorded at completion time.



