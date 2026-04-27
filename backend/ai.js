function replyAI(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("memo")) {
    return "Memo format: To, From, Subject, Body.";
  }

  if (msg.includes("meeting")) {
    return "Meeting notes: Date, Agenda, Decisions.";
  }

  if (msg.includes("leave")) {
    return "Leave form: Name, Dates, Reason.";
  }

  return "I can help with memos, meetings, and office tasks.";
}

module.exports = { replyAI };
