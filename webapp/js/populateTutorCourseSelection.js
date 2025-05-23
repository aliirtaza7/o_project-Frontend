// Function to populate tutor course selection for the Become a Tutor modal
function populateTutorCourseSelection() {
    const courseSelectionContainer = document.getElementById('tutorCourseSelection');
    // Clear previous content
    courseSelectionContainer.innerHTML = '';
    
    const courses = [
        { id: 'CS101', name: 'Introduction to Programming' },
        { id: 'CS201', name: 'Data Structures' },
        { id: 'CS301', name: 'Database Systems' },
        { id: 'MTH101', name: 'Calculus I' },
        { id: 'MTH201', name: 'Linear Algebra' },
        { id: 'PHY101', name: 'Physics I' },
        { id: 'ENG101', name: 'English Composition' }
    ];
    
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item mb-3 p-3 border rounded shadow-sm';
        
        // Create course checkbox
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'd-flex align-items-center mb-2';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input tutor-course-checkbox me-2';
        checkbox.id = `course-${course.id}`;
        checkbox.value = course.id;
        
        const label = document.createElement('label');
        label.className = 'form-check-label fw-medium';
        label.htmlFor = `course-${course.id}`;
        label.textContent = `${course.id} - ${course.name}`;        
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        courseItem.appendChild(checkboxDiv);
        
        // Create proficiency slider
        const proficiencyDiv = document.createElement('div');
        proficiencyDiv.className = 'proficiency-slider d-none';
        
        proficiencyDiv.innerHTML = `
            <label class="form-label d-flex justify-content-between">
                <span>Proficiency Level:</span>
                <span class="badge bg-info" id="proficiency-value-${course.id}">5</span>
            </label>
            <input type="range" class="form-range" min="1" max="10" value="5" 
                   id="proficiency-${course.id}" onInput="document.getElementById('proficiency-value-${course.id}').textContent = this.value">
            <div class="d-flex justify-content-between mt-1">
                <small class="text-muted">Beginner</small>
                <small class="text-muted">Expert</small>
            </div>
        `;
        
        courseItem.appendChild(proficiencyDiv);
        courseSelectionContainer.appendChild(courseItem);
        
        // Show/hide proficiency slider when checkbox is checked/unchecked
        checkbox.addEventListener('change', () => {
            proficiencyDiv.className = checkbox.checked ? 'proficiency-slider mt-3' : 'proficiency-slider d-none';
        });
    });
}
