/**
 * Icon registry
 *
 * Maps the icon names used in /src/data to Lucide components. Importing
 * explicitly (instead of `import * as LucideIcons`) keeps the bundle
 * tree-shaken.
 */

import {
  Bot,
  Box,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Lock,
  Mic,
  Network,
  Shield,
  Terminal,
  Zap,
} from 'lucide-react';

const icons = { Bot, Box, Brain, Cloud, Code, Cpu, Database, Globe, Lock, Mic, Network, Shield, Terminal, Zap };

export const getIcon = (name, fallback = Box) => icons[name] ?? fallback;

export default icons;
