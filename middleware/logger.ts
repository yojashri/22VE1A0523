// logger.ts

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
}

export function logger(level: LogLevel, message: string, data?: any): LogEntry {
  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    data,
  };

  // This is where you'd normally send to a server, file, etc.
  console.log(JSON.stringify(logEntry, null, 2));

  return logEntry;
}
