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

function addCertificationField() {
  const container = document.getElementById('certification-fields');
  const newItem = document.createElement('div');
  newItem.className = 'certification-item';
  newItem.innerHTML = `
    <div class="form-group">
      <label>Certification Name</label>
      <input type="text" class="certification-name" placeholder="e.g. Google Data Analytics">
    </div>
    <div class="form-group">
      <label>Issuer</label>
      <input type="text" class="certification-issuer" placeholder="e.g. Coursera, Google">
    </div>
    <div class="form-group" style="display: flex; gap: 10px;">
      <div style="flex: 1;">
        <label>Year</label>
        <input type="text" class="certification-year" placeholder="e.g. 2023">
      </div>
    </div>
    <button type="button" onclick="this.parentNode.remove()" style="background: #fecaca; color: #b91c1c; margin-top: 5px;">
      <i class="fas fa-trash"></i> Remove Certification
    </button>
  `;
  container.appendChild(newItem);
}

function addAwardField() {
  const container = document.getElementById('award-fields');
  const newItem = document.createElement('div');
  newItem.className = 'award-item';
  newItem.innerHTML = `
    <div class="form-group">
      <label>Award Title</label>
      <input type="text" class="award-title" placeholder="e.g. Employee of the Year">
    </div>
    <div class="form-group">
      <label>Issuer</label>
      <input type="text" class="award-issuer" placeholder="e.g. Company Name">
    </div>
    <div class="form-group" style="display: flex; gap: 10px;">
      <div style="flex: 1;">
        <label>Year</label>
        <input type="text" class="award-year" placeholder="e.g. 2022">
      </div>
    </div>
    <button type="button" onclick="this.parentNode.remove()" style="background: #fecaca; color: #b91c1c; margin-top: 5px;">
      <i class="fas fa-trash"></i> Remove Award
    </button>
  `;
  container.appendChild(newItem);
}

function addReferenceField() {
  const container = document.getElementById('reference-fields');
  const newItem = document.createElement('div');
  newItem.className = 'reference-item';
  newItem.innerHTML = `
    <div class="form-group">
      <label>Reference Name</label>
      <input type="text" class="reference-name" placeholder="e.g. John Doe">
    </div>
    <div class="form-group">
      <label>Relationship</label>
      <input type="text" class="reference-relationship" placeholder="e.g. Manager, Professor">
    </div>
    <div class="form-group">
      <label>Contact Info</label>
      <input type="text" class="reference-contact" placeholder="e.g. john@example.com, +123456789">
    </div>
    <button type="button" onclick="this.parentNode.remove()" style="background: #fecaca; color: #b91c1c; margin-top: 5px;">
      <i class="fas fa-trash"></i> Remove Reference
    </button>
  `;
  container.appendChild(newItem);
}

function nextStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
  document.getElementById('step-' + step).style.display = '';
}
function prevStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
  document.getElementById('step-' + step).style.display = '';
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
  const image = document.getElementById('image').value || 'https://ui-avatars.com/api/?name=Profile&background=random';
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s);
  const languages = document.getElementById('languages').value.split(',').map(l => l.trim()).filter(l => l);
  
  // Education
  const educationItems = [];
  const educationElements = document.querySelectorAll('.education-item');
  educationElements.forEach(item => {
    educationItems.push({
      degree: item.querySelector('.education-degree') ? item.querySelector('.education-degree').value : '',
      institution: item.querySelector('.education-institution') ? item.querySelector('.education-institution').value : '',
      from: item.querySelector('.education-from') ? item.querySelector('.education-from').value : '',
      to: item.querySelector('.education-to') ? item.querySelector('.education-to').value : ''
    });
  });
  
  // Experience
  const experienceItems = [];
  const experienceElements = document.querySelectorAll('.experience-item');
  experienceElements.forEach(item => {
    experienceItems.push({
      title: item.querySelector('.experience-title') ? item.querySelector('.experience-title').value : '',
      company: item.querySelector('.experience-company') ? item.querySelector('.experience-company').value : '',
      from: item.querySelector('.experience-from') ? item.querySelector('.experience-from').value : '',
      to: item.querySelector('.experience-to') ? item.querySelector('.experience-to').value : '',
      description: item.querySelector('.experience-description') ? item.querySelector('.experience-description').value : ''
    });
  });
  
  // Projects
  const projectItems = [];
  const projectElements = document.querySelectorAll('.project-item');
  projectElements.forEach(item => {
    projectItems.push({
      name: item.querySelector('.project-name') ? item.querySelector('.project-name').value : '',
      description: item.querySelector('.project-description') ? item.querySelector('.project-description').value : ''
    });
  });
  
  // Certifications
  const certificationItems = [];
  const certificationElements = document.querySelectorAll('.certification-item');
  certificationElements.forEach(item => {
    certificationItems.push({
      name: item.querySelector('.certification-name') ? item.querySelector('.certification-name').value : '',
      issuer: item.querySelector('.certification-issuer') ? item.querySelector('.certification-issuer').value : '',
      year: item.querySelector('.certification-year') ? item.querySelector('.certification-year').value : ''
    });
  });
  // Awards
  const awardItems = [];
  const awardElements = document.querySelectorAll('.award-item');
  awardElements.forEach(item => {
    awardItems.push({
      title: item.querySelector('.award-title') ? item.querySelector('.award-title').value : '',
      issuer: item.querySelector('.award-issuer') ? item.querySelector('.award-issuer').value : '',
      year: item.querySelector('.award-year') ? item.querySelector('.award-year').value : ''
    });
  });
  // References
  const referenceItems = [];
  const referenceElements = document.querySelectorAll('.reference-item');
  referenceElements.forEach(item => {
    referenceItems.push({
      name: item.querySelector('.reference-name') ? item.querySelector('.reference-name').value : '',
      relationship: item.querySelector('.reference-relationship') ? item.querySelector('.reference-relationship').value : '',
      contact: item.querySelector('.reference-contact') ? item.querySelector('.reference-contact').value : ''
    });
  });
  // Hobbies
  const hobbies = document.getElementById('hobbies').value.split(',').map(h => h.trim()).filter(h => h);
  // Memberships
  const memberships = document.getElementById('memberships').value.split(',').map(m => m.trim()).filter(m => m);
  // Custom Section
  const customSectionTitle = document.getElementById('custom-section-title').value;
  const customSectionContent = document.getElementById('custom-section-content').value;
  
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
        ${certificationItems.length > 0 && certificationItems.some(c => c.name) ? `
  <div class="section">
    <h3><i class="fas fa-certificate"></i> CERTIFICATIONS</h3>
    ${certificationItems.filter(c => c.name).map(cert => `
      <div class="certification-item">
        <div class="item-header">
          <span class="item-title">${cert.name}</span>
          <span class="item-date">${cert.year}</span>
        </div>
        <p class="item-subtitle">${cert.issuer}</p>
      </div>
    `).join('')}
  </div>
` : ''}
${awardItems.length > 0 && awardItems.some(a => a.title) ? `
  <div class="section">
    <h3><i class="fas fa-trophy"></i> AWARDS & HONORS</h3>
    ${awardItems.filter(a => a.title).map(award => `
      <div class="award-item">
        <div class="item-header">
          <span class="item-title">${award.title}</span>
          <span class="item-date">${award.year}</span>
        </div>
        <p class="item-subtitle">${award.issuer}</p>
      </div>
    `).join('')}
  </div>
` : ''}
${referenceItems.length > 0 && referenceItems.some(r => r.name) ? `
  <div class="section">
    <h3><i class="fas fa-users"></i> REFERENCES</h3>
    ${referenceItems.filter(r => r.name).map(ref => `
      <div class="reference-item">
        <div class="item-header">
          <span class="item-title">${ref.name}</span>
          <span class="item-date">${ref.relationship}</span>
        </div>
        <p class="item-subtitle">${ref.contact}</p>
      </div>
    `).join('')}
  </div>
` : ''}
${hobbies.length > 0 ? `
  <div class="section">
    <h3><i class="fas fa-heart"></i> HOBBIES & INTERESTS</h3>
    <div class="skills-list">
      ${hobbies.map(hobby => `<div class="skill-item"><span class="skill-name">${hobby}</span></div>`).join('')}
    </div>
  </div>
` : ''}
${memberships.length > 0 ? `
  <div class="section">
    <h3><i class="fas fa-id-badge"></i> MEMBERSHIPS</h3>
    <div class="skills-list">
      ${memberships.map(m => `<div class="skill-item"><span class="skill-name">${m}</span></div>`).join('')}
    </div>
  </div>
` : ''}
${customSectionTitle && customSectionContent ? `
  <div class="section">
    <h3><i class="fas fa-plus-circle"></i> ${customSectionTitle}</h3>
    <p>${customSectionContent}</p>
  </div>
` : ''}
      </div>
    </div>
  `;

  const cvDiv = document.getElementById('cv');
  if (cvDiv) {
    cvDiv.innerHTML = output;
  }
  // Show the modal
  const modal = document.getElementById('cv-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeCVModal() {
  const modal = document.getElementById('cv-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function updateProgress(step) {
  // Update progress bar width
  const progress = document.getElementById('progress');
  if (progress) {
    progress.style.width = (step * 100 / 8) + '%';
  }
  // Update step indicators
  const steps = document.querySelectorAll('.step');
  steps.forEach((el, idx) => {
    if (idx < step) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// Patch nextStep and prevStep to update progress
const _nextStep = nextStep;
const _prevStep = prevStep;
nextStep = function(step) {
  document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
  document.getElementById('step-' + step).style.display = '';
  updateProgress(step);
};
prevStep = function(step) {
  document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
  document.getElementById('step-' + step).style.display = '';
  updateProgress(step);
};

function downloadCV() {
  buildCV(); // Always generate the latest CV
  setTimeout(() => {
    const cv = document.querySelector('.a4-cv');
    if (!cv) {
      alert('Please generate your CV first!');
      return;
    }
    const opt = {
      margin:       0,
      filename:     'My_CV.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };
    html2pdf().set(opt).from(cv).save();
  }, 300); // Wait 300ms for DOM update
}
