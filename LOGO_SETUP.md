# Logo Setup Instructions

## How to Add Your Logo

### Step 1: Copy Your Logo File
Copy your logo file to the `public/` folder in the project root.

**Supported formats:**
- `.png` (recommended)
- `.jpg` / `.jpeg`
- `.svg`
- `.webp`

### Step 2: Update Logo Filename (if needed)

The components currently reference `/logo.png`

If your logo has a different name, update these files:

#### Option A: Rename your logo to `logo.png`
This is the easiest approach - just rename your file to `logo.png` and place it in the `public/` folder.

#### Option B: Update component references
If you want to keep your logo's original filename, update the `src` attributes in:

1. **src/components/Header.jsx** (line ~15)
   ```jsx
   src="/logo.png"  // Change to your filename
   ```

2. **src/components/Footer.jsx** (line ~47)
   ```jsx
   src="/logo.png"  // Change to your filename
   ```

### Step 3: Verify

After adding the logo, run the development server:
```bash
npm run dev
```

You should see your logo appear in:
- Top-left corner of the header (sticky navigation)
- Footer (next to "Zorian Loan Finance" text)

---

## Logo Specifications

### Recommended Size
- **Width**: 200-300px
- **Height**: 200-300px
- **Format**: PNG or SVG with transparent background

### Current Display Sizes
- **Header**: `h-10` (40px height)
- **Footer**: `h-8` (32px height)

The component uses `object-contain` and `w-auto` so the logo maintains aspect ratio at these heights.

---

## Example File Structure

```
zorian-loan-react/
├── public/
│   ├── logo.png          ← Your logo file here
│   └── vite.svg          (optional, default Vite logo)
├── src/
│   ├── components/
│   │   ├── Header.jsx    (references /logo.png)
│   │   └── Footer.jsx    (references /logo.png)
│   └── ...
└── ...
```

---

## Troubleshooting

### Logo not showing?
1. Make sure file is in `public/` folder (not `src/`)
2. Check filename matches in Header.jsx and Footer.jsx
3. Verify the path starts with `/` (e.g., `/logo.png`)
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Logo looks blurry?
- Use a higher resolution image (at least 2x the display size)
- SVG format is recommended for crisp logos at any size

### Logo colors not right?
- If your logo has a specific background color, you may need to adjust the header/footer background colors
- Transparent PNG/SVG works best for flexibility

---

## Quick Setup

1. Copy your logo to `public/logo.png`
2. Run `npm run dev`
3. Done! ✨
