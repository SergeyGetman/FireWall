// Kanban.tsx
import React, { useState } from 'react';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Типы
interface Task {
  id: string;
  content: string;
}

// Данные
const initialTasks: Task[] = [
  { id: '1', content: 'Задача 1: Сделать дизайн' },
  { id: '2', content: 'Задача 2: Написать логику' },
  { id: '3', content: 'Задача 3: Проверить тесты' },
];

// Компонент одной карточки (с возможностью перетаскивания)
function TaskCard({ task }: { task: Task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    padding: '12px',
    margin: '6px 0',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    cursor: 'move',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    userSelect: 'none',
  };

  return (
    <div
      ref={setNodeRef}
      // @ts-ignore
      style={style}
      {...attributes}
      {...listeners}
    >
      {task.content}
    </div>
  );
}

// Основной компонент Kanban
const TestedKanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // Настройка сенсоров (мышь + тач)
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {})
  );

  // Обработчик окончания перетаскивания
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        // Перемещаем элемент
        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);

        return newItems;
      });
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📋 Kanban Board (DnD Kit)</h2>

      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default TestedKanban;