# 📡 MeetCloud & LAN Studio — Video, Lavagna & Controllo Dispositivi

Applicazione web completa per collegare **2 PC su reti Wi-Fi diverse** (tramite **GitHub Pages**) oppure **offline in LAN**, con:
- **Video e Audio Peer-to-Peer (WebRTC)** e condivisione schermo
- **Lavagna Didattica Multi-Pagina** sincronizzata in tempo reale (Penna, Evidenziatore, Puntatore Laser, Forme, Testo/Formule, Piano Cartesiano)
- **Centro Controllo Dispositivi Connessi** (silenzia/attiva microfono remoto, oscura webcam, blocca/sblocca lavagna del 2° PC, richiedi condivisione schermo, allinea pagina e campanello)

---

## 🚀 Come caricarla su GitHub e usarla tra 2 Wi-Fi diversi (in 2 minuti)

1. Crea un nuovo repository pubblico su [GitHub](https://github.com/new) (es. `meet-lavagna`).
2. Estrai questo archivio `.zip` e carica i file (`index.html`, `README.md`, `.nojekyll`) nel repository.
3. Su GitHub, vai in **Settings** (in alto) → **Pages** (nel menu a sinistra).
4. Sotto **Build and deployment** → **Branch**, seleziona **`main`** (o `master`) e clicca **Save**.
5. Dopo circa 30-60 secondi comparirà il tuo link online, ad esempio:
   `https://tuo-username.github.io/meet-lavagna/`

### Come collegare i 2 PC da 2 Wi-Fi diversi:
- **Sul PC 1:** Apri il link GitHub Pages. L'app entra automaticamente nella stanza `AULA-101` (puoi cambiare il nome stanza in alto e cliccare **⚡ Connetti Stanza**).
- **Sul PC 2 (su un altro Wi-Fi):** Apri lo stesso link (oppure il link generato dal pulsante **🔗 Link 2° PC**). Il secondo PC rileverà l'Host e si collegherà automaticamente in video, audio e lavagna!

---

## 🔌 Uso Offline in Rete Locale / Hotspot Windows (Opzionale)
Se ti trovi senza Internet, puoi:
1. Usare la scheda **🔌 P2P Offline** a destra nell'app, oppure
2. Avviare `avvia_offline_windows.bat` (richiede Node.js) se i due PC sono collegati tramite Hotspot Mobile di Windows.