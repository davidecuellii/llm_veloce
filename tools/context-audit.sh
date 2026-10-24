#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
bytes() { wc -c < "$1" | tr -d ' '; }
tokens() { awk -v n="$1" 'BEGIN { printf "~%d", n / 4 }'; }
row() {
  local label="$1" path="$2" total
  if [ -d "$root/$path" ]; then
    total=$(find "$root/$path" -type f -print0 | xargs -0 wc -c 2>/dev/null | tail -1 | awk '{print $1}')
  elif [ -f "$root/$path" ]; then
    total=$(bytes "$root/$path")
  else
    total=0
  fi
  printf '%-22s %10s bytes  %8s tokens\n' "$label" "$total" "$(tokens "$total")"
}

echo "Context audit: $root"
row "CLAUDE kernel" "CLAUDE.md"
row "AGENTS entry point" "AGENTS.md"
row "System map" "system/map.md"
row "Hot memory" "memory/hot"
row "Protocols (lazy)" "system/protocols"
row "Root index" "index.md"
row "Recent log" "log/recent.md"
row "Wiki entities" "agenzia"
row "Clients" "clients"
row "Prospects" "prospects"
row "Playbook" "playbook"
row "Concepts" "concepts"
row "Knowledge" "knowledge"
row "Output (lazy)" "output"
row "Raw (cold)" "raw"
row "Export (excluded)" "export-soci"
echo
echo "Largest files (excluding raw and export):"
find "$root/agenzia" "$root/clients" "$root/prospects" "$root/playbook" "$root/concepts" \
  "$root/knowledge" "$root/output" "$root/system" "$root/memory" "$root/log" -type f -print0 | \
  xargs -0 wc -c 2>/dev/null | sort -nr | head -12
