async function downloadData() {
    const res = await fetch('ifsc.json');
     window.ifscData = await res.json();
    }
    downloadData();