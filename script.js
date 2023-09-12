// script.js
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  let activeTab = 'tab1';

  function showTab(tabId) {
    if (tabId === activeTab) return;

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    const tab = document.querySelector(`[data-tab="${tabId}"]`);
    if (tab) {
      tab.classList.add('active');
    }

    const tabContent = document.getElementById(`${tabId}-content`);
    if (tabContent) {
      tabContent.style.display = 'block';
    }

    activeTab = tabId;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      showTab(tabId);
    });
  });

  // Initialize by showing the first tab
  showTab('tab1');
  
  // Programmatically click on the first tab to set it as active initially
  const firstTab = document.querySelector('[data-tab="tab1"]');
  if (firstTab) {
    firstTab.click();
  }
});

