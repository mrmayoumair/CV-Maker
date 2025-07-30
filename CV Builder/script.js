function addEducationField() {
  const container = document.getElementById('education-fields');
  const newItem = document.createElement('div');
  newItem.className = 'education-item';
  newItem.innerHTML = `
    <div class="form-group">
      <label>Degree/Qualification</label>
      <input type="text" class="education-degree" placeholder="e.g. BSCS Computer Science">
    </div>
    <div class="form-group">
      <label>Institution</label>
      <input type="text" class="education-institution" placeholder="e.g. University of Karachi">
    </div>
    <div class="form-group" style="display: flex; gap: 10px;">
      <div style="flex: 1;">
        <label>From Year</label>
        <input type="text" class="education-from" placeholder="e.g. 2020">
      </div>
      <div style="flex: 1;">
        <label>To Year</label>
        <input type="text" class="education-to" placeholder="e.g. 2024 or Present">
      </div>
    </div>
    <button type="button" onclick="this.parentNode.remove()" style="background: #fecaca; color: #b91c1c; margin-top: 5px;">
      <i class="fas fa-trash"></i> Remove Education
    </button>
  `;
  container.appendChild(newItem);
}

function addExperienceField() {
  const container = document.getElementById('experience-fields');
  const newItem = document.createElement('div');
  newItem.className = 'experience-item';
  newItem.innerHTML = `
    <div class="form-group">
      <label>Job Title</label>
      <input type="text" class="experience-title" placeholder="e.g. Software Developer">
    </div>
    <div class="form-group">
      <label>Company</label>
      <input type="text" class="experience-company" placeholder="e.g. ABC Technologies">
    </div>
    <div class="form-group" style="display: flex; gap: 10px;">
      <div style="flex: 1;">
        <label>From Year</label>
        <input type="text" class="experience-from" placeholder="e.g. 2022">
      </div>
      <div style="flex: 1;">
        <label>To Year</label>
        <input type="text" class="experience-to" placeholder="e.g. 2023 or Present">
      </div>
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea class="experience-description" rows="2" placeholder="Describe your responsibilities and achievements"></textarea>
    </div>
    <button type="button" onclick="this.parentNode.remove()" style="background: #fecaca; color: #b91c1c; margin-top: 5px;">
      <i class="fas fa-trash"></i> Remove Experience
    </button>
  `;
  container.appendChild(newItem);
}

function addProjectField() {
  const container = document.getElementById('project-fields');
  const newItem = document.createElement('div');
  newItem.className = 'project-item';
  newItem.innerHTML = `
    <div class="form-group">
      <label>Project Name</label>
      <input type="text" class="project-name" placeholder="e.g. E-commerce Website">
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea class="project-description" rows="2" placeholder="Describe the project and technologies used"></textarea>
    </div>
    <button type="button" onclick="this.parentNode.remove()" style="background: #fecaca; color: #b91c1c; margin-top: 5px;">
      <i class="fas fa-trash"></i> Remove Project
    </button>
  `;
  container.appendChild(newItem);
}

function buildCV() {
  // Personal Information
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;
  const image = document.getElementById('image').value || 'https://i.imgur.com/JvN1iYT.png';
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s);
  const languages = document.getElementById('languages').value.split(',').map(l => l.trim()).filter(l => l);
  
  // Education
  const educationItems = [];
  const educationElements = document.querySelectorAll('.education-item');
  educationElements.forEach(item => {
    educationItems.push({
      degree: item.querySelector('.education-degree').value,
      institution: item.querySelector('.education-institution').value,
      from: item.querySelector('.education-from').value,
      to: item.querySelector('.education-to').value
    });
  });
  
  // Experience
  const experienceItems = [];
  const experienceElements = document.querySelectorAll('.experience-item');
  experienceElements.forEach(item => {
    experienceItems.push({
      title: item.querySelector('.experience-title').value,
      company: item.querySelector('.experience-company').value,
      from: item.querySelector('.experience-from').value,
      to: item.querySelector('.experience-to').value,
      description: item.querySelector('.experience-description').value
    });
  });
  
  // Projects
  const projectItems = [];
  const projectElements = document.querySelectorAll('.project-item');
  projectElements.forEach(item => {
    projectItems.push({
      name: item.querySelector('.project-name').value,
      description: item.querySelector('.project-description').value
    });
  });
  
  // Generate CV HTML
  const output = `
    <div class="a4-cv">
      <!-- Sidebar -->
      <div class="sidebar">
        <img src="${image}" alt="Profile Photo" class="profile-img">
        
        <div class="name-title">
          <h2>${name || 'Your Name'}</h2>
          <p>${title || 'Professional Title'}</p>
        </div>
        
        <div class="contact-info">
          <h3>CONTACT</h3>
          ${email ? `
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>${email}</span>
          </div>
          ` : ''}
          
          ${phone ? `
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>${phone}</span>
          </div>
          ` : ''}
          
          ${address ? `
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${address}</span>
          </div>
          ` : ''}
          
          ${linkedin ? `
          <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <span>${linkedin.replace('https://', '').replace('www.', '')}</span>
          </div>
          ` : ''}
          
          ${github ? `
          <div class="contact-item">
            <i class="fab fa-github"></i>
            <span>${github.replace('https://', '').replace('www.', '')}</span>
          </div>
          ` : ''}
        </div>
        
        ${skills.length > 0 ? `
        <div class="skills">
          <h3>SKILLS</h3>
          <div class="skills-list">
            ${skills.map(skill => `
              <div class="skill-item">
                <span class="skill-name">${skill}</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: ${70 + Math.random() * 30}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        ${languages.length > 0 ? `
        <div class="languages">
          <h3>LANGUAGES</h3>
          <div class="languages-list">
            ${languages.map(language => `
              <div class="language">
                <span class="skill-name">${language}</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: ${70 + Math.random() * 30}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>
      
      <!-- Main Content -->
      <div class="main-content">
        ${summary ? `
        <div class="section">
          <h3><i class="fas fa-user-tie"></i> PROFILE</h3>
          <p>${summary}</p>
        </div>
        ` : ''}
        
        ${educationItems.length > 0 ? `
        <div class="section">
          <h3><i class="fas fa-graduation-cap"></i> EDUCATION</h3>
          ${educationItems.map(edu => `
            <div class="education-item">
              <div class="item-header">
                <span class="item-title">${edu.degree || 'Degree'}</span>
                <span class="item-date">${edu.from || ''} - ${edu.to || ''}</span>
              </div>
              <p class="item-subtitle">${edu.institution || 'Institution'}</p>
            </div>
          `).join('')}
        </div>
        ` : ''}
        
        ${experienceItems.length > 0 ? `
        <div class="section">
          <h3><i class="fas fa-briefcase"></i> EXPERIENCE</h3>
          ${experienceItems.map(exp => `
            <div class="experience-item">
              <div class="item-header">
                <span class="item-title">${exp.title || 'Position'}</span>
                <span class="item-date">${exp.from || ''} - ${exp.to || ''}</span>
              </div>
              <p class="item-subtitle">${exp.company || 'Company'}</p>
              <p class="item-description">${exp.description || ''}</p>
            </div>
          `).join('')}
        </div>
        ` : ''}
        
        ${projectItems.length > 0 ? `
        <div class="section">
          <h3><i class="fas fa-project-diagram"></i> PROJECTS</h3>
          ${projectItems.map(proj => `
            <div class="project-item">
              <p class="item-title">${proj.name || 'Project Name'}</p>
              <p class="item-description">${proj.description || ''}</p>
            </div>
          `).join('')}
        </div>
        ` : ''}
      </div>
    </div>
  `;

  document.getElementById('cv').innerHTML = output;
}

function downloadCV() {
  alert("To download as PDF, please use the Print button and choose 'Save as PDF' in your printer options.");
}