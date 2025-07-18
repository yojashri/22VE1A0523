// logger.test.ts
import { logger } from './logger';

const testLog = logger('INFO', 'Test message', { testData: 123 });

console.assert(testLog.level === 'INFO', 'Level should be INFO');
console.assert(typeof testLog.timestamp === 'string', 'Timestamp should be a string');
console.assert(testLog.message === 'Test message', 'Message mismatch');
console.assert(testLog.data?.testData === 123, 'Data mismatch');

console.log('✅ Logger test passed');
