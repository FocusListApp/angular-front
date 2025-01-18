import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task(1, 'Example Title', 'completed', new Date(), new Date(), new Date(), new Date())).toBeTruthy();
  });

  it('should create an instance from json', () => {
    const task = {
      id: 1,
      title: 'Example Title',
      status: 'completed',
      dueDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: new Date(),
    };
    const taskInstance = Task.fromJson(task);
    expect(taskInstance).toBeTruthy();
    expect(taskInstance.title).toEqual('Example Title');
    expect(taskInstance.id).toEqual(1);
  })

  it('should instance to json', () => {
    const task = new Task(1, 'Example Title', 'completed', new Date(), new Date(), new Date(), new Date())
    const json = task.toJson();
    expect(json).toBeTruthy();
    expect(json.title).toEqual('Example Title');
    expect(json.id).toEqual(1);
  })
});
