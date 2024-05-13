#import "RNNComponentOptions.h"
#import "RNNOptions.h"
#import "RNNSubtitleOptions.h"

@interface RNNTitleOptions : RNNOptions

@property(nonatomic, strong) TextL *text;
@property(nonatomic, strong) Number *fontSize;
@property(nonatomic, strong) Color *color;
@property(nonatomic, strong) TextL *fontFamily;
@property(nonatomic, strong) TextL *fontWeight;
@property(nonatomic, strong) RNNComponentOptions *component;
@property(nonatomic, strong) TextL *componentAlignment;

- (BOOL)hasValue;

@end
