$folderPath = ".\"

$files = Get-ChildItem -Path $folderPath -File | Sort-Object Name

$counter = 1

foreach ($file in $files) {
    if ($counter -gt 100) { break }

    $newName = "$counter$($file.Extension)"
    $newPath = Join-Path $folderPath $newName

    Rename-Item -Path $file.FullName -NewName $newName
    Write-Host "$($file.Name) -> $newName"

    $counter++
}
