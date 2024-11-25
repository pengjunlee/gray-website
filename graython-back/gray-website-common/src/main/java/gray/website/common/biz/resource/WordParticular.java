package gray.website.common.biz.resource;

import gray.website.common.entity.GrayFolder;
import gray.website.common.entity.GrayResource;
import gray.website.common.utils.ResourceUtil;

import java.nio.file.Path;

/**
 * Word特殊处理实现
 */
public class WordParticular implements Particular {
    @Override
    public boolean processParticular(Path path, GrayResource resource, GrayFolder folder) {
        return ResourceUtil.updateWordInfo(path, resource);
    }
}
