#import "RNNOptions.h"

@interface RNNComponentOptions : RNNOptions <NSCopying>

@property(nonatomic, strong) TextL *name;
@property(nonatomic, strong) TextL *componentId;
@property(nonatomic, strong) TextL *alignment;
@property(nonatomic, strong) Bool *waitForRender;

- (BOOL)hasValue;

@end
