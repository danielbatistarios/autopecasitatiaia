#!/usr/bin/env python3
"""
Fix footer mobile CSS across all pages (except index.html already done).
Changes:
  1. gap: 28px 16px → gap: 20px 16px  (less row gap)
  2. padding: 8px 0 → padding: 4px 0 on .footer-links a  (less link spacing)
  3. margin-bottom: 8px → margin-bottom: 6px on .footer-col-title
  4. Add .footer-grid > div:last-child rule (Horário+Contato side by side)
  5. Add .footer-grid > div:first-child > div[style*="orange"] { display:none }
  6. .footer { padding: 32px 0 100px; } → .footer { padding: 28px 0 100px; }
"""

import re
import glob

FILES = [f for f in glob.glob('/Users/jrios/autopecasitatiaia/*.html')
         if 'index.html' not in f]

# Anchored replacements — exact strings from troca-de-oleo.html format
REPLACEMENTS = [
    # 1. Less row gap
    (
        '  .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px 16px; }',
        '  .footer-grid { grid-template-columns: 1fr 1fr; gap: 20px 16px; }'
    ),
    # 2. Less link padding
    (
        '  .footer-links a { min-height: 0; padding: 8px 0; font-size: 13px; display: block; }',
        '  .footer-links a { min-height: 0; padding: 4px 0; font-size: 13px; display: block; }'
    ),
    # 3. Less col-title margin
    (
        '  .footer-col-title { font-size: 10px; margin-bottom: 8px; }',
        '  .footer-col-title { font-size: 10px; margin-bottom: 6px; }'
    ),
    # 4. Less top padding on footer
    (
        '  .footer { padding: 32px 0 100px; }',
        '  .footer { padding: 28px 0 100px; }'
    ),
]

# Insertion: add last-child rule after div:first-child rule
INSERT_AFTER = '  .footer-grid > div:first-child { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; gap: 12px; }'
INSERT_LINES = [
    '  .footer-grid > div:first-child > div[style*="orange"] { display: none; }',
    '  .footer-grid > div:last-child { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }',
]

for filepath in sorted(FILES):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    changes = []

    # Apply string replacements
    for old, new in REPLACEMENTS:
        if old in content:
            content = content.replace(old, new)
            changes.append(f'  replaced: {old[:60]}...')
        else:
            changes.append(f'  NO MATCH: {old[:60]}...')

    # Insert last-child + orange-hide rules after first-child rule
    last_child_rule = '  .footer-grid > div:last-child { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }'
    orange_rule = '  .footer-grid > div:first-child > div[style*="orange"] { display: none; }'

    if INSERT_AFTER in content:
        if last_child_rule not in content:
            insert_block = INSERT_AFTER + '\n' + orange_rule + '\n' + last_child_rule
            content = content.replace(INSERT_AFTER, insert_block)
            changes.append('  inserted last-child + orange-hide rules')
        else:
            changes.append('  last-child rule already present, skipped')
    else:
        changes.append(f'  NO MATCH for insert anchor: {INSERT_AFTER[:60]}...')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'UPDATED: {filepath}')
    else:
        print(f'NO CHANGE: {filepath}')

    for c in changes:
        print(c)
    print()

print('Done.')
