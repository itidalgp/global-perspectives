document.addEventListener('DOMContentLoaded', function() {
    const reportBtn = document.getElementById('reportBtn');
    const viewEvidenceBtn = document.getElementById('viewEvidenceBtn');

    if (reportBtn) {
        reportBtn.addEventListener('click', function() {
            alert("Thank you for your report! The Itidal.gp team has received it and we will respond to you shortly.");
        });
    }

    if (viewEvidenceBtn) {
        viewEvidenceBtn.addEventListener('click', function() {
            
            document.getElementById('evidence').scrollIntoView({ behavior: 'smooth' });
        });
    }
