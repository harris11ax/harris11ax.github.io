// Variables to track components and connections
let components = [];
let connections = [];

// Drag-and-drop functionality
document.querySelectorAll('.component').forEach(component => {
  component.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.type);
  });
});

// Workspace grid
const grid = document.querySelector('.grid');
grid.addEventListener('dragover', (e) => {
  e.preventDefault();
});

grid.addEventListener('drop', (e) => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  const component = createComponent(type);
  grid.appendChild(component);
  components.push(component);
});

// Create a component element
function createComponent(type) {
  const component = document.createElement('div');
  component.className = 'component';
  component.textContent = type;
  component.draggable = true;
  component.dataset.type = type;
  component.dataset.value = 1; // Default value
  component.addEventListener('click', () => {
    const newValue = prompt(`Enter value for ${type}:`, component.dataset.value);
    if (newValue !== null) {
      component.dataset.value = newValue;
      component.textContent = `${type} (${newValue})`;
    }
  });
  return component;
}

// Simplify button logic
document.getElementById('simplify-button').addEventListener('click', () => {
  // TODO: Implement simplification logic
  const stepExplanation = document.getElementById('step-explanation');
  stepExplanation.textContent = 'Simplification step will be shown here.';
});