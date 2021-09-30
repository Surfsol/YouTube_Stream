// RCTVideoSelectedModule.m
// details of .h file go in .m file
#import "RCTVideoSelectedModule.h"
#import <React/RCTLog.h>

// RCT_EXPORT_METHOD exposes name of method createVideoEvent in js
// createVideoEvent takes in name as string
// callbacks implemented with RCTResponseSenderBlock
RCT_EXPORT_METHOD(createVideoEvent:(NSString *)name resolver: (RCTResponseSenderBlock)resolve
                  rejecter: (RCTResponseSenderBlock)reject)
{
  NSInteger eventName = createVideoEvent();
  NSDate *currDate = [NSDate date];
  NSDateFormatter *dateFormat = [[NSDateFormatter alloc]init];
  [dateFormat setDateFormat:@"MM.dd.YYYY"];
  NSString *dateString = [dateFormat stringFromDate:currDate];
  dateString = [dateString stringByAppendingString:@" ${name}"];
  if (dateString) {
      resolve(@(dateString));
    } else {
      reject(@"event_failure", @"no event id returned", nil);
    }
}

@implementation RCTVideoSelectedModule

// To export a module named RCTVideoSelectedModule
RCT_EXPORT_MODULE()

@end