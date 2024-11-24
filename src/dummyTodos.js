let date = new Date();
const todos = [
  {
    todo: "Deck Log | 1200 - 1600 Watch",
    assignedBy: "Wayship",
    isDone: true,
    isUrgent: false,
    dueDate: new Date().setDate(date.getDate() + 2),
  },
  {
    todo: "COVID19 Health Guidelines",
    assignedBy: "Techincal",
    isDone: false,
    isUrgent: true,
    dueDate: new Date().setDate(date.getDate() + 2),
  },
  {
    todo: "Steering Check",
    assignedBy: "Captain",
    isDone: false,
    isUrgent: false,
    dueDate: new Date().setHours(date.getHours() + 2),
  },
  {
    todo: "ECDIS Check",
    assignedBy: "Chief Officer",
    isDone: false,
    isUrgent: false,
    dueDate: new Date().setHours(date.getHours() + 6),
  },
  {
    todo: "Review Noon Report",
    assignedBy: "Self",
    isDone: false,
    isUrgent: false,
    dueDate: new Date().setHours(date.getHours() + 8),
  },
];

export default todos;
