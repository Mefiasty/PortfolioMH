# Portfolio - Instrukcja wdrożenia na GitHub Pages

## Opis
Nowoczesne, responsywne portfolio stworzone z użyciem HTML5, CSS3 i JavaScript. Portfolio zawiera sekcje: Hero, O mnie, Projekty, Doświadczenie i Kontakt.

## Funkcjonalności
- ✅ Responsywny design (mobile-first)
- ✅ Smooth scrolling między sekcjami
- ✅ Animacje przy przewijaniu
- ✅ Interaktywne menu hamburger na mobile
- ✅ Formularz kontaktowy z integracją mailto
- ✅ Hover effects i animacje
- ✅ Optymalizowane obrazy projektów
- ✅ Ikony mediów społecznościowych
- ✅ Timeline doświadczenia zawodowego

## Struktura plików
```
portfolio/
├── index.html          # Główny plik HTML
├── styles.css          # Style CSS
├── script.js           # JavaScript
├── profile.jpg         # Zdjęcie profilowe
├── project1.jpg        # Obraz projektu 1
├── project2.jpg        # Obraz projektu 2
├── project3.jpg        # Obraz projektu 3
└── README.md          # Ten plik
```

## Wdrożenie na GitHub Pages

### Krok 1: Przygotowanie repozytorium
1. Zaloguj się na GitHub
2. Utwórz nowe repozytorium o nazwie `portfolio` lub `username.github.io`
3. Ustaw repozytorium jako publiczne

### Krok 2: Upload plików
1. Skopiuj wszystkie pliki z folderu `portfolio/` do głównego katalogu repozytorium
2. Upewnij się, że plik `index.html` znajduje się w głównym katalogu

### Krok 3: Aktywacja GitHub Pages
1. Przejdź do ustawień repozytorium (Settings)
2. Przewiń do sekcji "Pages"
3. W "Source" wybierz "Deploy from a branch"
4. Wybierz branch "main" i folder "/ (root)"
5. Kliknij "Save"

### Krok 4: Dostęp do strony
Po kilku minutach Twoje portfolio będzie dostępne pod adresem:
- `https://username.github.io/portfolio/` (jeśli repozytorium nazywa się "portfolio")
- `https://username.github.io/` (jeśli repozytorium nazywa się "username.github.io")

## Personalizacja

### Zmiana danych osobowych
Edytuj plik `index.html` i zmień:
- Imię i nazwisko w sekcji hero
- Opis zawodu/specjalizacji
- Informacje w sekcji "O mnie"
- Linki do mediów społecznościowych
- Dane kontaktowe

### Zmiana projektów
1. Zastąp obrazy `project1.jpg`, `project2.jpg`, `project3.jpg` własnymi
2. Edytuj opisy projektów w HTML
3. Zaktualizuj linki do demo i repozytorium

### Zmiana doświadczenia
Edytuj sekcję timeline w HTML, dodając lub usuwając pozycje zawodowe.

### Zmiana kolorów
Główne kolory można zmienić w pliku `styles.css`:
- `#2563eb` - niebieski główny
- `#7c3aed` - fioletowy akcentujący
- `#1f2937` - ciemnoszary tekst

### Dodanie CV
1. Dodaj plik `cv.pdf` do katalogu głównego
2. Link do pobrania CV już jest skonfigurowany w HTML

## Wsparcie techniczne
Portfolio jest kompatybilne z:
- Wszystkimi nowoczesnymi przeglądarkami
- Urządzeniami mobilnymi i tabletami
- Czytnikami ekranu (podstawowa dostępność)

## Optymalizacja SEO
Aby poprawić SEO:
1. Zmień tytuł strony w `<title>`
2. Dodaj meta description
3. Dodaj alt teksty do obrazów
4. Dodaj structured data (opcjonalnie)

## Licencja
Ten szablon portfolio jest darmowy do użytku osobistego i komercyjnego.

