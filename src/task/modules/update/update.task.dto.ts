interface UpdateTaskControllerDTO {
  title?: string;
  description?: string;
}

interface UpdateTaskDTO {
  id: string;
  title?: string;
  description?: string;
}

export { UpdateTaskControllerDTO, UpdateTaskDTO };
