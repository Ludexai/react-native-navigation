#import "TextParser.h"
#import "NullText.h"
#import <React/RCTConvert.h>

@implementation TextParser

+ (TextL *)parse:(NSDictionary *)json key:(NSString *)key {
    return json[key] ? [[TextL alloc] initWithValue:json[key]] : [NullText new];
}

@end
