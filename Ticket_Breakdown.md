# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

function getShiftsByFacility(facilityID){ [allShift], [agentMetadata] }
function generateReport([allShift]) { pdf }

# Steps for Implementation

1) 
Add customID field in Table
Effort: low
Details:
For every Facility initiated in custom IDs, create a new field for Agents in the Agents table which would store their custom IDs.

2)
addCustomID function to CRUD database
Effort: Medium
Details:
Implement function addCustomID that takes in parameters (agentID, customAgentID) to first locate the agent by their existing ID and then append customAgentID to the initiated fiend in the Agent table.

3)
Incorperate customID in getShiftsByFacility function
Effort: low
Details:
Modify getShiftsByFacility to return Agent's customID as part of the allShift list and agentMetadata.

4)
Add customID in generateReport function
Effort: low
Details:
Modify generateReport to output Agent's customID as part of the PDF generation.

5)
customID accessibility interface
Effort: low
Details:
Implement user interface to access addCustomID function easily. This could be a page with a filterable list of agents currently working at the facility including their id to input into function addCustomID() easily.