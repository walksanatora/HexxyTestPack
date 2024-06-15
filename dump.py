import csv
import tomllib
import os


with open("dump.csv", "w") as outfile:
    csv_writter = csv.writer(outfile)
    csv_writter.writerow([
        "name","side","mod source","page"
    ])
    for f in os.listdir("mods/"):
        if f.endswith(".toml"):
            with open(f"mods/{f}", "rb") as file:
                toml = tomllib.load(file)
                url = ""
                src = "url"
                name = f.split(".")[0]
                if "update" in toml:
                    update = toml["update"]
                    if "modrinth" in update:
                        url = f"https://modrinth.com/mod/{name}"
                        src = "modrinth"
                    else:
                        url = f"https://www.curseforge.com/minecraft/mc-mods/{name}"
                        src = "curseforge"
                else: 
                    url = toml["download"]["url"]
                csv_writter.writerow([
                        name,
                        toml.get("side","both"),
                        src,
                        url
                    ])
                    
    else: csv_writter.writerow([
        f,
        "both",
        "jar file",
        "unknown"
    ])