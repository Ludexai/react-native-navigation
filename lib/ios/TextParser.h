#import "TextL.h"
#import <Foundation/Foundation.h>

@interface TextParser : NSObject

+ (TextL *)parse:(NSDictionary *)json key:(NSString *)key;

@end
