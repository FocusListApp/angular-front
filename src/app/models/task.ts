import { TaskService } from "../services/task.service";

export class Task {
    static service: TaskService;

    constructor(
        public id: number,
        public title: string,
        public status: string,
        public dueDate: Date,
        public createdAt: Date,
        public updatedAt: Date,
        public completedAt: Date,
    ) {

    }

    static fromJson(json: any): Task {
        return new Task(json.id, json.title, json.status, json.dueDate, json.createdAt, json.updatedAt, json.completedAt);
    }

    toJson(): any {
        return {
          id: this.id,
          title: this.title,
          status: this.status,
          dueDate: this.dueDate,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt,
          completedAt: this.completedAt
        };
      }
}
