import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvLUbC6g9XsfoB654QrZCu2UqPqRDvO4o",
  authDomain: "mapdata-733a6.firebaseapp.com",
  projectId: "mapdata-733a6",
  storageBucket: "mapdata-733a6.appspot.com",
  messagingSenderId: "55843897975",
  appId: "1:55843897975:web:343706cd2740d79643fc72",
  measurementId: "G-4BCNS0ZJ15"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const map = L.map('map').setView([4.2105, 101.9758], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const icons = {
  unesco: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  }),
  historical: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  }),
  cultural: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  }),
  natural: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  }),
  palace: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3069/3069172.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  }),
  temple: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/190/190781.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  }),
  unique: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3342/3342137.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  })
};

const statusElement = document.getElementById('status');
const fenceCircles = [];
let userMarker = null;
let userAccuracyCircle = null;
let currentGeofence = null;
const geofenceRadius = 500; 

let allSites = [];
const markers = {};

function fixImageUrl(url) {
  if (!url) return null;
  if (url.includes('/file/d/')) {
    return url.replace('/file/d/', '/uc?export=view&id=').split('/view')[0];
  }
  if (url.includes('drive.google.com/open?id=')) {
    const id = url.split('open?id=')[1].split('&')[0];
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }
  if (url.includes('drive.google.com') && url.includes('/d/')) {
    const id = url.split('/d/')[1].split('/')[0];
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }
  return url;
}

function createPopupContent(site) {
  const img = fixImageUrl(site.imageUrl) || '';
  const coords = site.lat && site.lng ? `${parseFloat(site.lat).toFixed(4)}, ${parseFloat(site.lng).toFixed(4)}` : '';
  return `
    <div class="custom-popup">
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            ${img
              ? `<img src="${img}" alt="${site.name}" style="width:100%;height:100%;object-fit:cover;" 
                    onerror="if(!this.dataset.error){this.outerHTML='<div class=\\'no-image\\'>Image not available</div>';this.dataset.error=1;}">`
              : '<div class="no-image">No image available</div>'}
          </div>
          <div class="flip-card-back">
            <h3 style="margin:0 0 10px 0;">${site.name || ''}</h3>
            <div>${site.description || 'No description available'}</div>
            ${coords ? `<div style="margin-top:10px;font-size:0.9em;color:#666;">${coords}</div>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}


function showCardUnlockPopup(site) {
  let popup = document.getElementById('card-unlock-popup');

  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'card-unlock-popup';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100vw';
    popup.style.height = '100vh';
    popup.style.background = 'rgba(0,0,0,0.5)';
    popup.style.zIndex = 3000;
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    document.body.appendChild(popup);
  }
  popup.innerHTML = `
    <div style="background: #fffbea; border-radius: 14px; box-shadow: 0 8px 32px rgba(52,152,219,0.16); display: flex; flex-direction: column; align-items: center; padding: 2rem 1.5rem 1.5rem 1.5rem; max-width: 340px; width: 92vw; position: relative;">
      <img id="card-unlock-img" src="${fixImageUrl(site.imageUrl) || ''}" alt="New Card" style="width: 180px; height: 180px; object-fit: cover; border-radius: 12px; margin-bottom: 1.1rem; background: #eee; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
      <div id="card-unlock-name" style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.7rem; color: #222; text-align: center;">${site.name || ''}</div>
      <div class="card-unlock-msg" style="color: #b88400; font-size: 1.05rem; margin-bottom: 1rem; text-align: center; font-weight: 500;">You unlocked a new card!</div>
      <button id="card-unlock-close" style="padding: 0.4rem 1.5rem; background: #3498db; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 1rem;">Close</button>
    </div>
  `;
  popup.style.display = 'flex';

  popup.onclick = function(e) {
    if (e.target.id === 'card-unlock-popup' || e.target.id === 'card-unlock-close') {
      popup.style.display = 'none';
    }
  };
}

// POPUP HANDLING

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}


function checkGeofences(position) {
  const userLat = position.coords.latitude;
  const userLng = position.coords.longitude;

  if (!userMarker) {
    userMarker = L.marker([userLat, userLng]).addTo(map).bindPopup("Your location");
    userAccuracyCircle = L.circle([userLat, userLng], {
      color: '#00AA00',
      fillColor: '#00AA00',
      fillOpacity: 0.2,
      radius: position.coords.accuracy
    }).addTo(map);
  } else {
    userMarker.setLatLng([userLat, userLng]);
    userAccuracyCircle.setLatLng([userLat, userLng]);
    userAccuracyCircle.setRadius(position.coords.accuracy);
  }

  let insideAnyFence = false;
  fenceCircles.forEach(fence => {
    const fenceCenter = fence.circle.getLatLng();
    const distance = getDistance(userLat, userLng, fenceCenter.lat, fenceCenter.lng);
    if (distance <= fence.circle.getRadius()) {
      insideAnyFence = true;
      if (currentGeofence !== fence.id) {
        currentGeofence = fence.id;
        statusElement.innerHTML = `Entered ${fence.name} area`;
        fence.circle.setStyle({ color: '#4eff00', fillColor: '#4eff00' });

        // localStorage
        let collected = JSON.parse(localStorage.getItem('collectedSites') || '[]');
        if (!collected.includes(fence.id)) {
          collected.push(fence.id);
          localStorage.setItem('collectedSites', JSON.stringify(collected));
          if (fence.site) {
            showCardUnlockPopup(fence.site);
          }
        }
        setTimeout(() => {
          fence.circle.setStyle({ color: '#FFC000', fillColor: '#FFC000' });
        }, 2000);
      }
    }
  });

  if (!insideAnyFence && currentGeofence) {
    statusElement.innerHTML = `Left ${currentGeofence} area`;
    currentGeofence = null;
  }
}

async function loadSites() {
  statusElement.innerHTML = "Loading sites...";
  try {
    const querySnapshot = await getDocs(collection(db, "culturalSites"));
    allSites = [];
    for (const doc of querySnapshot.docs) {
      const site = doc.data();
      site.id = doc.id;
      allSites.push(site);
    }
    renderSites(allSites);
    statusElement.innerHTML = "Ready - tracking your location";

    if (allSites.length > 0) {
      const markerObjs = Object.values(markers);
      if (markerObjs.length > 0) {
        const group = new L.featureGroup(markerObjs);
        map.fitBounds(group.getBounds().pad(0.2));
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        checkGeofences,
        (error) => statusElement.innerHTML = `Error: ${error.message}`,
        { enableHighAccuracy: true }
      );
    } else {
      statusElement.innerHTML = "Geolocation not supported by your browser.";
    }
  } catch (error) {
    console.error("Error:", error);
    statusElement.innerHTML = "Error loading data";
  }
}

function renderSites(sites) {
  Object.values(markers).forEach(marker => map.removeLayer(marker));
  fenceCircles.forEach(f => map.removeLayer(f.circle));
  fenceCircles.length = 0;

  sites.forEach(site => {
    if (site.lat && site.lng) {
      const lat = parseFloat(site.lat);
      const lng = parseFloat(site.lng);

      const icon = icons[site.type] || icons['historical'];
      const marker = L.marker([lat, lng], {
        icon: icon,
        title: site.name
      }).addTo(map);

      marker.bindPopup(createPopupContent(site), { maxWidth: 300 });
      markers[site.id] = marker;

      const circle = L.circle([lat, lng], {
        color: '#FFC000',
        fillColor: '#FFC000',
        fillOpacity: 0.3,
        radius: geofenceRadius
      }).addTo(map);

      fenceCircles.push({
        id: site.id,
        name: site.name,
        circle: circle,
        marker: marker,
        site: site 
      });
    }
  });

  displaySiteList(sites);
}

function displaySiteList(sites) {
  const siteList = document.getElementById('site-list');
  siteList.innerHTML = '';
  sites.forEach(site => {
    const siteItem = document.createElement('div');
    siteItem.className = 'site-item';
    siteItem.innerHTML = `
      <h3>${site.name || "(no name)"}</h3>
      <p>${site.type ? (site.type.charAt(0).toUpperCase() + site.type.slice(1)) : ''} Heritage</p>
    `;
    siteItem.addEventListener('click', () => {
      if (site.lat && site.lng) {
        map.setView([parseFloat(site.lat), parseFloat(site.lng)], 13);
        if (markers[site.id]) markers[site.id].openPopup();
      }
    });
    siteList.appendChild(siteItem);
  });
}

// Austin
function searchSites() {
  const searchTerm = document.getElementById('site-search').value.toLowerCase();
  if (!searchTerm) {
    renderSites(allSites);
    return;
  }
  const filteredSites = allSites.filter(site =>
    (site.name && site.name.toLowerCase().includes(searchTerm)) ||
    (site.description && site.description.toLowerCase().includes(searchTerm)) ||
    (site.type && site.type.toLowerCase().includes(searchTerm))
  );
  renderSites(filteredSites);

  if (filteredSites.length > 0) {
    const filteredMarkers = filteredSites.map(site => markers[site.id]).filter(Boolean);
    if (filteredMarkers.length > 0) {
      const group = new L.featureGroup(filteredMarkers);
      map.fitBounds(group.getBounds().pad(0.2));
    }
  }
}

document.getElementById('search-btn').addEventListener('click', searchSites);
document.getElementById('site-search').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') searchSites();
});

// Legend
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <h4>Legend</h4>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/196/196578.png) no-repeat center; background-size: contain;"></i> UNESCO Site</p>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/684/684908.png) no-repeat center; background-size: contain;"></i> Historical Site</p>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/3132/3132693.png) no-repeat center; background-size: contain;"></i> Cultural Site</p>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/484/484167.png) no-repeat center; background-size: contain;"></i> Natural Site</p>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/3069/3069172.png) no-repeat center; background-size: contain;"></i> Palace</p>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/190/190781.png) no-repeat center; background-size: contain;"></i> Temple</p>
    <p><i style="background: url(https://cdn-icons-png.flaticon.com/512/3342/3342137.png) no-repeat center; background-size: contain;"></i> Unique Attraction</p>
  `;
  return div;
};
legend.addTo(map);
document.getElementById('collection-btn').onclick = function() {
  window.location.href = 'collection.html';
};
loadSites();
document.getElementById('discover-btn').onclick = function() {
  window.location.href = 'discover.html';
};
document.getElementById('adventure-btn').onclick = function() {
  window.location.href = 'hack25.html';
};