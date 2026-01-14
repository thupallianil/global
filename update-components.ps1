# PowerShell script to add rounded containers to all page components

$components = @(
    "Crew", "Blueprint", "Footprint", "Synergy", "Alliescape", 
    "ImpactTales", "CoCreate", "Echoes", "Momentum", "Chronos", 
    "Spotlight", "Wavelength", "PulseStream", "ExpansionRequest"
)

$basePath = "c:\Users\Gutha Gowthami\Desktop\global\src\components"

foreach ($component in $components) {
    $filePath = Join-Path $basePath "$component.jsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Pattern 1: Match sections starting with className="bg-[#0F172A] py-
        $pattern1 = '(\s+)<section className="bg-\[#0F172A\] (py-\d+[^"]*)">'
        $replacement1 = '$1<section className="px-4 pt-4">' + "`r`n" + '$1    <div className="bg-[#0F172A] $2 rounded-3xl border border-[#1E293B]">'
        
        # Replace and add closing div before </section>
        if ($content -match $pattern1) {
            $content = $content -replace $pattern1, $replacement1
            $content = $content -replace '(\s+)</section>', '$1    </div>' + "`r`n" + '$1</section>'
            
            Set-Content -Path $filePath -Value $content -NoNewline
            Write-Host "Updated: $component"
        } else {
            Write-Host "Skipped (no match): $component"
        }
    } else {
        Write-Host "File not found: $component"
    }
}

Write-Host "`nBatch update complete!"
