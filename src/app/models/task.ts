import { from, Observable } from "rxjs";
import { TaskService } from "../services/task.service";
import { BackendOption } from "../types/settings.type";

export class Task {
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
