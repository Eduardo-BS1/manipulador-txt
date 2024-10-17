document.getElementById('arquivo').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('preview').value = event.target.result; 
        };
        reader.readAsText(file); 
    }
});

document.getElementById('download2').addEventListener('click', function() {
    const text = document.getElementById('preview').value; 
    const blob = new Blob([text], { type: 'text/plain' });  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); 
    link.download = document.getElementById('download1').value; 
    link.click(); 
});