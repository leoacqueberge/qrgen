// Récupération des éléments HTML
const linkInput = document.getElementById("link-input");
const qrCodeDiv = document.getElementById("qr-code");

// Fonction pour générer le QR code et le télécharger en SVG
function generateQR() {
	// Récupération du lien entré par l'utilisateur
	const link = linkInput.value;

	// Vérification que le lien est valide
	if (!link) {
		alert("Veuillez entrer un lien !");
		return;
	}

	// Création d'un nouveau QR code
	const qr = qrcode(0, "L");
	qr.addData(link);
	qr.make();

	// Récupération du QR code sous forme de SVG
	const svg = qr.createSvgTag({ 
		cellSize: 4,
		margin: 1,
	});

	// Affichage du QR code
	qrCodeDiv.innerHTML = svg;

	// Téléchargement du QR code en SVG
	const downloadLink = document.createElement("a");
	downloadLink.href = "data:image/svg+xml," + encodeURIComponent(svg);
	downloadLink.download = "qrcode.svg";
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}
