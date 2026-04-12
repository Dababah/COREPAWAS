# Core Pawas Auto-Sync Script
# Script ini akan memantau perubahan file dan otomatis push ke GitHub setiap 30 detik.

Write-Host "Core Pawas Auto-Sync Aktif..." -ForegroundColor Cyan
Write-Host "Memantau perubahan dan akan otomatis push ke GitHub setiap 30 detik." -ForegroundColor Yellow
Write-Host "Tekan Ctrl+C untuk menghentikan." -ForegroundColor Gray

while($true) {
    $status = git status --porcelain
    if ($status) {
        Write-Host "`nPerubahan terdeteksi pada $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Green
        git add .
        git commit -m "Auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push origin main
        Write-Host "Selesai! GitHub & Vercel sedang mengupdate." -ForegroundColor Blue
    }
    Start-Sleep -Seconds 30
}
