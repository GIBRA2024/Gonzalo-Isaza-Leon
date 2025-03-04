function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Isaza León;Gonzalo;;;
FN:Gonzalo Isaza León
TEL:+57 314716018
EMAIL;TYPE=WORK: directorpdv@cervalle.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
