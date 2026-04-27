async function handleChat(message) {

  // SIMPLE RULE-BASED START (free version)
  if (message.toLowerCase().includes("memo")) {
    return "Here is a memo template: [To, From, Subject, Body, Signature]";
  }

  if (message.toLowerCase().includes("meeting")) {
    return "Meeting Minutes Template: Date, Attendees, Agenda, Decisions, Actions.";
  }

  if (message.toLowerCase().includes("leave")) {
    return "Leave Form: Name, Position, Dates, Reason, Approval.";
  }

  return "I can help draft memos, minutes, letters, and office documents.";
}

module.exports = { handleChat };
